import apolloClient from "./apolloClient";
import gql from "graphql-tag";
import { idUrlAdapter, pageUrlAdapter } from "./urlAdapter";
import { DateTime } from "luxon";

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

function eventsGraphQL(locale, limit = 100) {
  const now = DateTime.utc().toISO();
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
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${videoGraphQl}
      ${newsGraphQl}
      ${eventsGraphQL(locale, 5)}
    }`,
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
  const pageGraphQl = createPageQuery(locale, resolvedUrl);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${eventsGraphQL(locale, 100)}
    }`,
  });
}

export async function singleEventLayout(context) {
  const { locale, resolvedUrl } = context;
  const pageGraphQl = createPageQuery(locale, pageUrlAdapter(resolvedUrl));
  const id = idUrlAdapter(resolvedUrl);
  const singleEventGraphQL = createSingleEventGraphQL(id, locale);
  const singleNewsGraphQL = createSingleNewsGraphQL(id, locale);
  return await apolloClient.query({
    query: gql`query { 
      ${pageGraphQl}
      ${singleEventGraphQL}
      ${singleNewsGraphQL}

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
