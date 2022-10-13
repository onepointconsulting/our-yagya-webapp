import { imageAdapter } from '../../lib/imageAdapter'

const graphQl = require("../components/data/homePageCustom")
const menuAdapterResult = require("../components/data/menuAdapterResult")

describe('imageAdapter', () => {
    it('converts GraphQL JSON to bgImage object', () => {
        expect(graphQl).toBeTruthy()
        const res = imageAdapter(graphQl)
        expect(JSON.stringify(res)).toBe(JSON.stringify(menuAdapterResult))
    })
})