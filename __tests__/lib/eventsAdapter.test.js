import {
    eventsAdapter,
    flatEventsAdapter,
} from '../../lib/eventsAdapter'

const eventsData = require("../components/data/eventsData.json")
const eventHomepagesData = require("../components/data/eventsHomepageData.json")
const eventsDataExpected = require("../components/data/eventsDataExpected.json")
const eventsHomepageDataExpected = require("../components/data/eventsHomepageDataExpected.json")
const eventsHomepageFlatDataExpected = require("../components/data/eventsHomepageFlatDataExpected.json")

describe('eventsAdapter', () => {
    it('converts GraphQL JSON en to grouped events', () => {
        expect(eventsData).toBeTruthy()
        expect(eventsDataExpected).toBeTruthy()
        const res = eventsAdapter(eventsData)
        expect(JSON.stringify(res)).toBe(JSON.stringify(eventsDataExpected))
    })
    it('converts events homepage GraphQL JSON en to grouped events', () => {
        expect(eventHomepagesData).toBeTruthy()
        expect(eventsHomepageDataExpected).toBeTruthy()
        const res = eventsAdapter(eventHomepagesData)
        expect(JSON.stringify(res)).toBe(JSON.stringify(eventsHomepageDataExpected))
    })
    it('converts events homepage GraphQL JSON en to flat events', () => {
        expect(eventHomepagesData).toBeTruthy()
        expect(eventsHomepageFlatDataExpected).toBeTruthy()
        const res = flatEventsAdapter(eventHomepagesData)
        expect(JSON.stringify(res)).toBe(JSON.stringify(eventsHomepageFlatDataExpected))
    })
})