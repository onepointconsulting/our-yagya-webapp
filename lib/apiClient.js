import apolloClient from './apolloClient'
import gql from 'graphql-tag'

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


export async function fetchMenus() {
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