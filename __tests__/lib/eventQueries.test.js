import { querySliderEvents } from '../../lib/eventQueries'

describe('eventQueries', () => {
  it('creates query for slider events', () => {
    const query = querySliderEvents('en', 82, 5)
    expect(query).toBeTruthy()
    expect(query.includes("locale: \"en\"")).toBe(true)
  })
})