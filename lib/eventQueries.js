import { DateTime } from 'luxon'
import { currentTimeAsISO } from './dateAdapter'

export function querySliderEvents (locale = 'en', categoryId = 82, limit = 10) {
  // TODO: sort events by startDate
  const nowISO = currentTimeAsISO()
  return `query {
  eventSessions (
    locale: "${locale}"
    pagination: { limit: ${limit} }
    filters: {event: { event_categories: {id: {eq: ${categoryId}} }, 
      startDate: {gt: "${nowISO}"}}
  ) {
    data {
      id
      attributes {
        startDate
        endDate
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
              event_categories {
                data {
                  attributes {
                    title
                  }
                }
              }
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
}`
}

export function eventsGraphQL (locale, limit = 100, category, start = 0) {
  const now = DateTime.utc().toISO()
  return `
      eventSessions(
        ${eventsMainFilters(locale, limit, start)}
        filters: { 
          ${eventFilters(now, null, category)}
        }
      ) 
      ${eventSessionFields()}
      `
}

export function eventsCalendarGraphQL (
  locale, limit = 100, startDate, endDate) {
  return `
      eventSessions(
        ${eventsMainFilters(locale, limit)}
        filters: { 
          ${eventFilters(startDate, endDate)}
        }
      ) 
      ${eventSessionFields()}
      `
}

const eventsMainFilters = (locale, limit = 100, start = 0) => {
  return `
        locale: "${locale}"
        pagination: { limit: ${limit} , start: ${start} } 
        sort: "startDate:asc"
  `
}

const eventFilters = (startDate, endDate, category) => {
  let filters = `
    startDate : { gt: "${startDate}" }
    event: {id: {ne: null}}
  `
  if (!!endDate) {
    filters += `
      endDate : { lte: "${endDate}" }
    `
  }
  if (!!category) {
    filters += `
      event: { categories: { title: { eq: "${category}" } } }
    `
  }
  return filters
}

const eventSessionFields = () => {
  return `
  {
    data {
      id
      attributes {
        startDate
        endDate
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
              event_categories {
                data {
                  attributes {
                    title
                  }
                }
              }
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