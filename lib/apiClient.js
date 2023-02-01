import apolloClient from './apolloClient'
import gql from 'graphql-tag'
import { idUrlAdapter, pageUrlAdapter } from './urlAdapter'
import {
  createEventCategoryQuery,
  eventsCalendarGraphQL,
  eventsGraphQL,
} from './eventQueries'
import findStartAndEndMonth from './dateAdapter'
import { getServerURL } from './apiConstants'
import axios from 'axios'

async function executeGraphQlQuery (queryStr) {
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
        category {
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

// Fetch the news data from (Strapi)
export async function newsLayout ({ locale, resolvedUrl }) {
  let url = pageUrlAdapter(resolvedUrl)
  const pageGraphQl = createPageQuery(locale, url)
  const sliderGraphQl = createSliderGraphQl(locale, url)
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${createAllNewsGraphQl(locale, 100)}
    }`,
  })
}

export async function eventsLayout ({ locale, resolvedUrl }) {
  //fetch the category id in the case of a single category page
  const categoryId = idUrlAdapter(resolvedUrl)
  const hasCategory = categoryId > -1
  const urlParams = hasCategory ? `?categoryId=${categoryId}` : ''
  const parentCategoryPromise = hasCategory ? executeGraphQlQuery(createEventCategoryQuery(categoryId)) : null
  const baseLayoutPromise = baseEventsLayout(locale, resolvedUrl)
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
  const parentCategoryPromise = executeGraphQlQuery(createEventCategoryQuery(categoryId)) 
  const baseLayoutPromise = baseEventsLayout(locale, resolvedUrl)
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

// export async function calendarLayout ({ locale, resolvedUrl }) {
//   const { start, end } = findStartAndEndMonth()
//   return await baseEventsLayout(locale, resolvedUrl,
//     () => eventsCalendarGraphQL(
//       locale, 100, start, end))
// }


export async function calendarLayout ({ locale, resolvedUrl }) {
  const { start, end } = findStartAndEndMonth()
  const categoryId = idUrlAdapter(resolvedUrl)
  const parentCategoryPromise = executeGraphQlQuery(createEventCategoryQuery(categoryId)) 
  const baseLayoutPromise = baseEventsLayout(locale, resolvedUrl)
  const baseEventsPromise = axios.get(`${getServerURL()}/api/events/category-events/${categoryId}?limit=5&startDateTime=${start}T00:00:00.000Z&endDateTime=${end}T00:00:00.000Z`)

  // /api/events/category-events/82?limit=5&startDateTime=2021-01-01T00:00:00.000Z&&endDateTime=2023-04-01T00:00:00.000Z
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








async function baseEventsLayout (locale, resolvedUrl) {
  const pageGraphQl = createPageQuery(locale, resolvedUrl)
  const sliderGraphQl = createSliderGraphQl(locale, resolvedUrl)
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
    }`,
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
