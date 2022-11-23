import { convertIsoToGoogleCal } from '../../lib/googleCalendar'

describe('googleCalendar', () => {
    it('converts data 2022-01-01T12:00:00', () => {
        const date = "2022-01-01T12:00:00"
        const res = convertIsoToGoogleCal(date)
        expect(res).toBe("20220101T120000")
    })
})