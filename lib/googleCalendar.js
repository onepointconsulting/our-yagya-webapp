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