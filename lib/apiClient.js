import apolloClient from './apolloClient'
import gql from 'graphql-tag'
import { idUrlAdapter, pageUrlAdapter } from './urlAdapter'
import { eventsCalendarGraphQL, eventsGraphQL } from './eventQueries'
import findStartAndEndMonth from './dateAdapter'
import { getServerURL } from './apiConstants'
import axios from 'axios'

function createPageQuery(locale, url) {
  return `
  pageLayouts (locale: "${locale}", filters: {url: {eq: "${url}"}}) {
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
`;
}

function createSliderGraphQl(locale, url) {
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
    `;
}

function createVideoGraphQl(locale, url) {
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
`;
}

// NEWS
function createAllNewsGraphQl(locale, limit = 3) {
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
  `;
}

function createSingleEventGraphQL(id, locale) {
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
  `;
}


function createSingleNewsGraphQL(id, locale) {
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
  `;
}
export async function pageLayout({ locale, resolvedUrl }) {
  let url = pageUrlAdapter(resolvedUrl);
  const pageGraphQl = createPageQuery(locale, url);
  return await apolloClient.query({
    query: gql`query { ${pageGraphQl} }`,
  });
}

// Fetch the menus data from (Strapi)q
export async function indexLayout({ locale, resolvedUrl }) {
  let url = pageUrlAdapter(resolvedUrl);
  const pageGraphQl = createPageQuery(locale, url);
  const sliderGraphQl = createSliderGraphQl(locale, url);
  const videoGraphQl = createVideoGraphQl(locale, url);
  const newsGraphQl = createAllNewsGraphQl(locale);
  const graphQl = `query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${videoGraphQl}
      ${newsGraphQl}
      ${eventsGraphQL(locale, 5)}
    }`
  return await apolloClient.query({
    query: gql`${graphQl}`,
  });
}

// Fetch the news data from (Strapi)
export async function newsLayout({ locale, resolvedUrl }) {
  let url = pageUrlAdapter(resolvedUrl);
  const pageGraphQl = createPageQuery(locale, url);
  const sliderGraphQl = createSliderGraphQl(locale, url);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${createAllNewsGraphQl(locale, 100)}
    }`,
  });
}

export async function eventsLayout({ locale, resolvedUrl }) {
  //fetch the category id in the case of a single category page
  const categoryId = idUrlAdapter(resolvedUrl);
  const urlParams = categoryId > -1 ? `?categoryId=${categoryId}` : ''
  const baseLayout = await baseEventsLayout(locale, resolvedUrl)
  const baseEvents = await axios.get(`${getServerURL()}/api/event-categories/event-tree/${locale}${urlParams}`)
  const { data } = baseEvents
  const categories = data.map(eventByCategory => ({id: eventByCategory.id, title: eventByCategory.title}))
  return {
    data: {
      pageLayouts: baseLayout.data.pageLayouts,
      slides: baseLayout.data.slides, // TODO: replace this request with result of querySliderEvents
      events: data,
      categories: categories
    }
  }
}

// export async function categoryEventsLayout(locale, category, start) {
//   console.log('categoryEventsLayout', locale)
//   return await apolloClient.query({
//     query: gql`query {
//       ${eventsGraphQL(locale, 3, category, start)}
//     }`,
//   });
// }

export async function calendarLayout({ locale, resolvedUrl }) {
  const {start, end} = findStartAndEndMonth()
  return await baseEventsLayout(locale, resolvedUrl, () => eventsCalendarGraphQL(
    locale, 100, start, end))
}


async function baseEventsLayout( locale, resolvedUrl ) {
  const pageGraphQl = createPageQuery(locale, resolvedUrl);
  const sliderGraphQl = createSliderGraphQl(locale, resolvedUrl);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
    }`,
  });
}

export const singleEventLayout = async context => await singleItemLayout(
    context, createSingleEventGraphQL)

export const singleNewsLayout = async context => await singleItemLayout(context,
    createSingleNewsGraphQL)

export async function singleItemLayout(context, itemFunc) {
  const { locale, resolvedUrl } = context;
  const pageGraphQl = createPageQuery(locale, pageUrlAdapter(resolvedUrl));
  const id = idUrlAdapter(resolvedUrl);
  const singleItemGraphQL = itemFunc(id, locale);
  return await apolloClient.query({
    query: gql`query { 
      ${pageGraphQl}
      ${singleItemGraphQL}
    }`,
  });
}

export async function fetchGlobalData(locale = "en") {
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
  });
}
//  slider
