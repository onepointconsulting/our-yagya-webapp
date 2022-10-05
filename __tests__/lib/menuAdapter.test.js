import { menuAdapter } from '../../lib/menuAdapter'

const graphQl = require("../components/data/menus")
const menuAdapterResult = require("../components/data/menuAdapterResult")

describe('menuAdapter', () => {
    it('converts GraphQL JSON to menu object', () => {
        expect(graphQl).toBeTruthy()
        const res = menuAdapter(graphQl)
        expect(JSON.stringify(res)).toBe(JSON.stringify(menuAdapterResult))
    })
})