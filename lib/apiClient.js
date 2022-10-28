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
function createNewsGraphQl(locale) {
  return `
    news(locale: "${locale}", pagination:{limit: 3}, sort:"publishedAt:desc") {
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
  const newsGraphQl = createNewsGraphQl(locale);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${videoGraphQl}
      ${newsGraphQl}
    }`
  });
}

// Fetch the menus data from (Strapi)
export async function newsLayout({ locale, resolvedUrl }) {
  let url = indexAdapter(resolvedUrl);
  const pageGraphQl = createPageQuery(locale, url);
  const sliderGraphQl = createSliderGraphQl(locale, url);
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
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
