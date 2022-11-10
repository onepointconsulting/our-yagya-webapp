import apolloClient from "./apolloClient";
import gql from "graphql-tag";

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
function createAllNewsGraphQl(locale, limit= 3) {
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

function eventsGraphQL(locale, limit= 3) {
  return `
      eventSessions(
        locale: "${locale}"
        pagination: { limit: ${limit} }
        sort: "startDate:desc"
      ) {
        data {
          id
          attributes {
            startDate
            endDate
            event {
              data {
                attributes {
                  title
                  categories {
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

function indexAdapter(resolvedUrl) {
  let url = resolvedUrl;
  if (url === "/" || url === "/es") {
    url = "/index";
  }
  return url;
}

export async function pageLayout({ locale, resolvedUrl }) {
  let url = indexAdapter(resolvedUrl);
  const pageGraphQl = createPageQuery(locale, url);
  return await apolloClient.query({
    query: gql`query { ${pageGraphQl} }`,
  });
}

// Fetch the menus data from (Strapi)
export async function indexLayout({ locale, resolvedUrl }) {
  let url = indexAdapter(resolvedUrl);
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
    }`
  });
}

// Fetch the news data from (Strapi)
export async function newsLayout({ locale, resolvedUrl }) {
  let url = indexAdapter(resolvedUrl);
  const pageGraphQl = createPageQuery(locale, url);
  const sliderGraphQl = createSliderGraphQl(locale, url);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${createAllNewsGraphQl(locale, 100)}
    }`
  })
}

export async function eventsLayout({locale, resolvedUrl}) {
  const pageGraphQl = createPageQuery(locale, resolvedUrl);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${eventsGraphQL(locale, 100)}
    }`
  })
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
