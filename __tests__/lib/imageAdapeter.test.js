import { imageAdapter } from '../../lib/imageAdapter'

const graphQl = require("../components/data/homePageCustom")
const menuAdapterResult = require("../components/data/menuAdapterResult")

describe('imageAdapter', () => {
    it('converts GraphQL JSON to bgImage object', () => {
        expect(graphQl).toBeTruthy()
        const res = imageAdapter(graphQl)
        expect(res).toBe("https://res.cloudinary.com/stackrefugee/image/upload/v1664906757/Clip1_c6ee2bd09f.png")
    })
})