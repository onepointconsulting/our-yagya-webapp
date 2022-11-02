import { newsAdapter } from '../../lib/newsAdapter'

const newsData = require("../components/data/newsData.json")
const expectedData = require("../components/data/newsDataExpected.json")

describe('newsAdapter', () => {
    it('converts GraphQL JSON to grouped news', () => {
        expect(newsData).toBeTruthy()
        const res = newsAdapter(newsData)
        expect(JSON.stringify(res)).toBe(JSON.stringify(expectedData))
    })
})