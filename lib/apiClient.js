import apolloClient from './apolloClient'
import gql from 'graphql-tag'

// // Fetch the pahe layout data from (Strapi)
export async function pageLayout({ locale, resolvedUrl }) {
  let url = resolvedUrl
  if(url === '/' || url === '/es') {
    url = '/index'
  }
  return await apolloClient.query({
    query: gql`
query {
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
}`,
  });
}

// Fetch the menus data from (Strapi)
export async function fetchMenusData(locale="en") {
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
}
    `,
  });
}

// Fetch the links data from (Strapi)
export async function fetchLinksData() {
  return await apolloClient.query({
    query: gql`
      {
        links(filters: { language: { code: { eq: "en" } } }) {
          data {
            attributes {
              Name
              Description
            }
          }
        }
      }
    `,
  });
}
