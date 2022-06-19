import apolloClient from './apolloClient'
import gql from 'graphql-tag'

// Fetch the footer data from (Strapi)

export async function fetchFooterFata() {
    return await apolloClient.query({
        query: gql` {
        footers(filters: {language: {code: {eq: "en"}}}) {
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
    })
}


// Fetch the menus data from (Strapi)
export async function fetchMenusData() {
    return await apolloClient.query({
        query: gql` {
    menus(filters: {language: {code: {eq: "en"}}}) {
        data {
            attributes {
              Entry {
                title
                link
              }
            }
        }
    }
}
`,
    })
}


// Fetch the links data from (Strapi)
export async function fetchLinksData() {
    return await apolloClient.query({
        query: gql` {
            links(filters: {language: {code: {eq: "en"}}}) {
                data {
                    attributes {
                      Name
                      Description
                      }
                }
            }
}
`,
    })
}
