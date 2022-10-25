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
  console.log("videoGraphQl", videoGraphQl)
  // TODO: create video graph ql for video
  return await apolloClient.query({
    query: gql`query {
      ${pageGraphQl}
      ${sliderGraphQl}
      ${videoGraphQl}
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
