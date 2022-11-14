import { newsAdapter } from '../../lib/newsAdapter'

const newsData = require("../components/data/newsData.json")
const newsData_es = require("../components/data/newsData_es.json")
const expectedData = require("../components/data/newsDataExpected.json")
const expectedData_es = require("../components/data/newsDataExpected_es.json")

describe('newsAdapter', () => {
    it('converts GraphQL JSON en to grouped news', () => {
        expect(newsData).toBeTruthy()
        const res = newsAdapter(newsData)
        expect(JSON.stringify(res)).toBe(JSON.stringify(expectedData))
    })
    it('converts GraphQL JSON es to grouped news', () => {
        expect(newsData).toBeTruthy()
        const res = newsAdapter(newsData_es)
        expect(JSON.stringify(res)).toBe(JSON.stringify(expectedData_es))
    })
})