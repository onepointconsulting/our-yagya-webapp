import { formateDate } from './dateAdapter'

export const convertIsoToGoogleCal = (dateStr, locale = 'en') => formateDate(
    dateStr, locale, "yyyyLLdd'T'HHmmss")

export function googleCalendarLink (event, date) {
    const venue = event.venue

    const renderedLocation = !!venue &&
        `&location=${encodeURI(venue.address)}` || ''

    return `http://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURI(
        event.name)}&dates=${convertIsoToGoogleCal(
        date.startIso)}/${convertIsoToGoogleCal(
        date.endIso)}&details=${encodeURI(
        event.descriptionText)}${renderedLocation}&trp=false&sf=true&output=xml`
}