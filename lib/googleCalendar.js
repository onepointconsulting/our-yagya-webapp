import { formateDate } from './dateAdapter'

export const convertIsoToGoogleCal = (dateStr, locale = 'en') => formateDate(dateStr, locale, "yyyyLLdd'T'HHmmss");

// No action have been implemented
export function createGoogleCalendarLink (event) {
    const venueAddress = event.venueAddress
    const renderedLocation = !!venueAddress &&  `&location=${encodeURI(venueAddress)}` || ''

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURI(
        event.eventTitle)}&dates=${convertIsoToGoogleCal(
        event.sStartDate)}/${convertIsoToGoogleCal(
        event.sEndDate)}&details=${encodeURI(
        event.sEeventDescription)}${renderedLocation}&trp=false&sf=true&output=xml`
}