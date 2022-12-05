import { DateTime } from 'luxon'

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

export function eventsCalendarGraphQL (locale, limit = 100, startDate, endDate) {
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

const eventsMainFilters =  (locale, limit = 100, start = 0) => {
  return `
        locale: "${locale}"
        pagination: { limit: ${limit} , start: ${start} } 
        sort: "startDate:asc"
  `
}

const eventFilters = (startDate, endDate, category) => {
  let filters = `
    startDate : { gt: "${startDate}" }
  `
  if (!!endDate) {
    filters += `
      endDate : { lte: "${endDate}" }
    `
  }
  if(!!category) {
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
                  categories {
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