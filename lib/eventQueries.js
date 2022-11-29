import { DateTime } from 'luxon'

export function eventsGraphQL (locale, limit = 100) {
    const now = DateTime.utc().toISO()
    return `
      eventSessions(
        locale: "${locale}"
        pagination: { limit: ${limit} }
        sort: "startDate:asc"
        filters: { startDate : { gt: "${now}" }}
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