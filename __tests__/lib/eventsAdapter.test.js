import { eventsAdapter } from '../../lib/eventsAdapter'

const eventsData = require("../components/data/eventsData.json")
const eventsDataExpected = require("../components/data/eventsDataExpected.json")

describe('eventsAdapter', () => {
    it('converts GraphQL JSON en to grouped events', () => {
        expect(eventsData).toBeTruthy()
        expect(eventsDataExpected).toBeTruthy()
        const res = eventsAdapter(eventsData)
        expect(JSON.stringify(res)).toBe(JSON.stringify(eventsDataExpected))
    })
})