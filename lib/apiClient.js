import apolloClient from "./apolloClient";
import gql from "graphql-tag";

// // Fetch the pahe layout data from (Strapi)
export async function pageLayout(pageName) {
  return await apolloClient.query({
    query: gql`
      {
        pageLayouts(filters: { key: { eq: "home" } }) {
          data {
            attributes {
              title
              subtitle
              slider {
                title
                slides {
                  id
                  image {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  title
                  startTimestamp
                  speakers
                  link
                }
              }
            }
          }
        }
      }
    `,
  });
}
// Fetch the footer data from (Strapi)
export async function fetchFooterFata() {
  return await apolloClient.query({
    query: gql`
      {
        footers(filters: { language: { code: { eq: "en" } } }) {
          data {
            attributes {
              items {
                title
                link
              }
            }
          }
        }
      }
    `,
  });
}

// Fetch the menus data from (Strapi)
export async function fetchMenusData() {
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
                  }
                }
              }
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
