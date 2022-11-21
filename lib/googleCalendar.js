import { formateDate } from './dateAdapter'

export const convertIsoToGoogleCal = (dateStr, locale = 'en') => formateDate(dateStr, locale, "yyyyLLdd'T'HHmmss");


// No action have been implemented
export function googleCalendarLink (event, date) {
    const venue = event.venue
    const renderedLocation = !!venue &&  `&location=${encodeURI(venue.address)}` || ''

    return `http://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURI(
        event.name)}&dates=${convertIsoToGoogleCal(
        date.startIso)}/${convertIsoToGoogleCal(
        date.endIso)}&details=${encodeURI(
        event.descriptionText)}${renderedLocation}&trp=false&sf=true&output=xml`
}

// testing 😁
export const googleCalendarTest = (data) => {
    const googleCalendarTestData = data?.data?.eventSessions?.data;
    
    if (googleCalendarTestData.length > 0) {
        const attributes = googleCalendarTestData[0]?.attributes;
        const venueData = attributes?.event?.data?.attributes?.venue?.data?.attributes;
        const venueCountry = venueData?.country?.data?.attributes?.name
        const venueName = venueData?.name;
        const venueAddress = venueData?.address;
        const venueLocality = venueData?.locality;
        const venuePostalCode = venueData?.postalCode;
        const renderedLocation = !!venueAddress &&  `&location=${encodeURI(venueAddress)}` || '';
        console.log("renderedLocation", renderedLocation)
        return {
            venueName,
            venueAddress,
            venueLocality,
            venuePostalCode,
            venueCountry
        };
        
    }
    return null
}