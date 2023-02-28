import apolloClient from './apolloClient'
import gql from 'graphql-tag'
import { idUrlAdapter, pageUrlAdapter } from './urlAdapter'
import { createEventCategoryQuery, eventsGraphQL } from './eventQueries'
import { getServerURL } from './apiConstants'
import axios from 'axios'
import findPeriodFromNow from './dateAdapter'

async function executeGraphQlQuery (queryStr) {
  console.log('executeGraphQlQuery', queryStr)
  return await apolloClient.query({
    query: gql`query { ${queryStr} }`,
  })
}

function removeNumbers (url) {
  return url?.replace(/(.+)\/\d+$/, '$1')
}

function createPageQuery (locale, url) {
  const cleanUrl = removeNumbers(url)
  return `
  pageLayouts (locale: "${locale}", filters: {url: {eq: "${cleanUrl}"}}) {
    data {
      attributes {
        title
        layout
        backgroundImage {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
`
}

function createSliderGraphQl (locale, url) {
  return `
      slides(locale: "${locale}", filters: { url: { eq: "${url}" } }) {
        data {
          id
          attributes {
            url
            slider {
              id
              title
              slides {
                id
                title
                image {
                  data {
                    id
                    attributes {
                      name
                      alternativeText
                      url
                    }
                  }
                }
                speakers
                startTimestamp
                link
              }
            }
          }
        }
      }
    `
}

function createVideoGraphQl (locale, url) {
  return `
videos(locale: "${locale}", filters: { url: { eq: "${url}" } }) {
  data {
    id
    attributes {
      url
      video
      title
      speaker
      date
      durationHours
      durationMinutes
      durationSeconds
    }
  }
}
`
}

// NEWS
function createAllNewsGraphQl (locale, limit = 3) {
  return `
    news(locale: "${locale}", pagination:{limit: ${limit}}, sort:"publishedAt:desc") {
    data {
      id
      attributes {
        title
        timestamp
        content
        images {
          data {
            id
            attributes {
              url
              alternativeText
            }
          }
        }
        categories {
          data {
            attributes {
              title
              parent {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `
}

function createSingleEventGraphQL (id, locale) {
  return `
  eventSessions(
    locale: "${locale}"
    filters: { id : { eq: ${id} }}
  ) {
    data {
      id
      attributes {
        title
        description
        startDate
        endDate
        liveLink
        timezone {
          data {
            attributes {
              name
              abbreviation
            }
          }
        }
        event {
          data {
            attributes {
              featuredImage {
                data {
                  id
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              title
              onlineStatus
              joinLink
              venue {
                data {
                  attributes {
                    name
                    address
                    postalCode
                    locality
                    country {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `
}

function createSingleNewsGraphQL (id, locale) {
  return `
  news(locale: "${locale}", filters: { id: { eq: ${id} } }) {
    data {
      id
      attributes {
        title
        timestamp
        content
        video
        timezone
        sourceViewLink
        images {
          data {
            id
            attributes {
              name
              alternativeText
              url
            }
          }
        }
        files {
          data {
            id
            attributes {
              name
              alternativeText
              url
            }
          }
        }
      }
    }
  }
  `
}

export async function pageLayout ({ locale, resolvedUrl }) {
  let url = pageUrlAdapter(resolvedUrl)
  const pageGraphQl = createPageQuery(locale, url)
  return await apolloClient.query({
    query: gql`query { ${pageGraphQl} }`,
  })
}

// Fetch the menus data from (Strapi)q
export async function indexLayout ({ locale, resolvedUrl }) {
  let url = pageUrlAdapter(resolvedUrl)
  const pageGraphQl = createPageQuery(locale, url)
  const sliderGraphQl = createSliderGraphQl(locale, url)
  const videoGraphQl = createVideoGraphQl(locale, url)
  const newsGraphQl = createAllNewsGraphQl(locale)
  const graphQl = `query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${videoGraphQl}
      ${newsGraphQl}
      ${eventsGraphQL(locale, 5)}
    }`
  return await apolloClient.query({
    query: gql`${graphQl}`,
  })
}

export async function newsLayout ({ locale, resolvedUrl }) {
  //fetch the category id in the case of a single category page
  const categoryId = idUrlAdapter(resolvedUrl)
  const hasCategory = categoryId > -1
  const urlParams = hasCategory ? `?categoryId=${categoryId}` : ''
  const baseLayoutPromise = basePageAndSliderLayout(locale, resolvedUrl)
  const baseNewsPromise = axios.get(`${getServerURL()}/api/categories/news-tree/${locale}${urlParams}`)
  const newsCategoryInfoPromise = newsCategoryInfoQuery(categoryId)
  const promiseAll = await Promise.all([baseLayoutPromise, baseNewsPromise, newsCategoryInfoPromise])
  const [baseLayout, baseNews, newsCategoryInfo] = promiseAll

  const { data } = baseNews
  
  const categories = data.map(newsByCategory => ({
    id: newsByCategory.id,
    title: newsByCategory.title,
  }))

  return {
    data: {
      pageLayouts: baseLayout.data.pageLayouts,
      slides: baseLayout.data.slides,
      news: data,
      categories: categories,
      newsCategoryInfo
    },
  }
}

const MAX_LISTING = 30

export async function newsListingLayout ({ locale, resolvedUrl }) {
  //fetch the category id in the case of a single category page
  const categoryId = idUrlAdapter(resolvedUrl)
  const baseLayoutPromise = basePageAndSliderLayout(locale, resolvedUrl)
  const baseNewsPromise = axios.get(`${getServerURL()}/api/category/news/${categoryId}?limit=${MAX_LISTING}`)
  const promiseAll = await Promise.all([baseLayoutPromise, baseNewsPromise])
  const [baseLayout, baseNews] = promiseAll

  const { data : {news} } = baseNews

  return {
    data: {
      pageLayouts: baseLayout.data.pageLayouts,
      slides: baseLayout.data.slides,
      news: news
    },
  }
}

export async function eventsLayout ({ locale, resolvedUrl }) {
  //fetch the category id in the case of a single category page
  const categoryId = idUrlAdapter(resolvedUrl)
  const hasCategory = categoryId > -1
  const urlParams = hasCategory ? `?categoryId=${categoryId}` : ''
  const parentCategoryPromise = hasCategory ? executeGraphQlQuery(createEventCategoryQuery(categoryId)) : null
  const baseLayoutPromise = basePageAndSliderLayout(locale, resolvedUrl)
  const baseEventsPromise = axios.get(`${getServerURL()}/api/event-categories/event-tree/${locale}${urlParams}`)

  const promiseAll = await Promise.all([parentCategoryPromise, baseLayoutPromise, baseEventsPromise])

  const [parentCategory, baseLayout, baseEvents] = promiseAll

  const { data } = baseEvents
  const categories = data.map(eventByCategory => ({
    id: eventByCategory.id,
    title: eventByCategory.title,
  }))

  return {
    data: {
      pageLayouts: baseLayout.data.pageLayouts,
      slides: baseLayout.data.slides,
      events: data,
      categories: categories,
      parentCategory,
    },
  }
}

export async function eventsBlogLayout ({ locale, resolvedUrl }) {
  const categoryId = idUrlAdapter(resolvedUrl)
  const parentCategoryPromise = executeGraphQlQuery(createEventCategoryQuery(categoryId, locale))
  const baseLayoutPromise = basePageAndSliderLayout(locale, resolvedUrl)
  const baseEventsPromise = axios.get(`${getServerURL()}/api/events/category-events/${categoryId}`)

  const promiseAll = await Promise.all([parentCategoryPromise, baseLayoutPromise, baseEventsPromise])

  const [parentCategory, baseLayout, baseEvents] = promiseAll

  const { data } = baseEvents
  return {
    data: {
      pageLayouts: baseLayout.data.pageLayouts,
      events: data.events,
      parentCategory
    }
  }
}

const CALENDAR_LIMIT = 500

export async function calendarLayout ({ locale, resolvedUrl }) { 
  const { start, end } = findPeriodFromNow()
  const categoryId = idUrlAdapter(resolvedUrl)
  const parentCategoryPromise = executeGraphQlQuery(createEventCategoryQuery(categoryId))
  const baseLayoutPromise = basePageAndSliderLayout(locale, resolvedUrl, false)
  let calendarEventsUrl = `${getServerURL()}/api/events/category-events/${categoryId}?limit=${CALENDAR_LIMIT}&startDateTime=${start}T00:00:00.000Z&endDateTime=${end}T00:00:00.000Z`
  const baseEventsPromise = axios.get(calendarEventsUrl)
  const baseFiltersPromise = axios.get(`${getServerURL()}/api/events/calendar-filters/${categoryId}`)
  
  const promiseAll = await Promise.all([parentCategoryPromise, baseLayoutPromise, baseEventsPromise, baseFiltersPromise])
  const [parentCategory, baseLayout, baseEvents, baseFilters] = promiseAll

  const { data: eventsData  } = baseEvents
  const { data: filtersData } = baseFilters

  return { 
    data: {
      categoryId,
      pageLayouts: baseLayout.data.pageLayouts,
      events: eventsData.events,
      filters: filtersData.filters,
      parentCategory,
      locale
    }
  }
}



async function basePageAndSliderLayout (locale, resolvedUrl, hasSlider = true) {
  const pageGraphQl = createPageQuery(locale, resolvedUrl)
  const sliderGraphQl = !!hasSlider ? createSliderGraphQl(locale, resolvedUrl) : null
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${!!hasSlider ? sliderGraphQl : ""}
    }`,
  })
}

async function newsCategoryInfoQuery(categoryId) {
  if(!categoryId) {
    return {}
  }
  return await apolloClient.query({
    query: gql`
query {
  category(id: ${categoryId}) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
`,
  })
}

export const singleEventLayout = async context => await singleItemLayout(
  context, createSingleEventGraphQL)

export const singleNewsLayout = async context => await singleItemLayout(context,
  createSingleNewsGraphQL)

export async function singleItemLayout (context, itemFunc) {
  const { locale, resolvedUrl } = context
  const pageGraphQl = createPageQuery(locale, pageUrlAdapter(resolvedUrl))
  const id = idUrlAdapter(resolvedUrl)
  const singleItemGraphQL = itemFunc(id, locale)
  return await apolloClient.query({
    query: gql`query { 
      ${pageGraphQl}
      ${singleItemGraphQL}
    }`,
  })
}

export async function fetchGlobalData (locale = 'en') {
  return await apolloClient.query({
    query: gql`
query {
  menusMenus {
    data {
      id
      attributes {
        title
        slug
        items {
          data {
            id
            attributes {
              order
              title
              url
              icon {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              parent {
                data {
                  attributes {
                    title
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  menuTranslations (locale: "${locale}") {
    data {
      attributes {
        title
        url
      }
    }
  }
  globalProperties (locale: "${locale}") {
    data {
      attributes {
        key
        value
      }
    }
  }
}
    `,
  })
}

//  slider
