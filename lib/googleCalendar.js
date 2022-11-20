import { formateDate } from "./dateAdapter"

export function convertIsoToGoogleCal () {
    // TODO: use Luxon instead of moment. Eventually use formateDate
    const ddd = formateDate('cccc, dd LLLL yyyy')
    return console.log("FormatedDate", ddd)
}

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