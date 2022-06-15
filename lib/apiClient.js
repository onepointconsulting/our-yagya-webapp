import apolloClient from './apolloClient'
import gql from 'graphql-tag'

export async function fetchFooters () {
    return await apolloClient.query({
        query: gql`
{
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