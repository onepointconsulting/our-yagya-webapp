
function flatEvents (events) {
    return events.flatMap((s) => {
        const id = s.id
        const startDate = s.attributes?.startDate
        const endDate = s.attributes?.endDate
        let categories = []
        const categoriesData = s.attributes?.event?.data?.attributes?.categories?.data
        const image = s.attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.url
        const alternativeText = s.attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.alternativeText
        const timezone = s.attributes?.timezone?.data?.attributes?.abbreviation
        const title = s.attributes?.event?.data?.attributes?.title

        if (!categoriesData || categoriesData.length === 0) {
            return []
        }
        for (const c of categoriesData) {
            categories.push(c.attributes?.title)
        }
        return categories.map((category) => {
            return {
                id,
                category: category,
                title,
                startDate,
                endDate,
                timezone,
                image,
                alternativeText,
            }
        })
    })
}

export function flatEventsAdapter(data) {
    const events = data?.data?.eventSessions?.data;

    if (events.length > 0) {
        return flatEvents(events)
    }
    return []
}

export const eventsAdapter = (data) => {
    const events = data?.data?.eventSessions?.data;

    if (events.length > 0) {
        const session = flatEvents(events)

        return session.reduce((previousValue, currentValue) => {
            if (!previousValue[currentValue.category]) {
                previousValue[currentValue.category] = [];
            }
            previousValue[currentValue.category].push({
                id: currentValue.id,
                title: currentValue.title,
                date: currentValue.startDate,
                timezone: currentValue.timezone,
                image: currentValue.image,
                alternativeText: currentValue.alternativeText,
            });
            return previousValue;
        }, {});
    }

    return [];
};

export const singleEventAdapter = (data) => {
    const singleEventData = data?.data?.eventSessions?.data;

    if (singleEventData.length > 0) {
        const attributes = singleEventData[0]?.attributes
        const sTimezone = attributes?.timezone?.data?.attributes;
        const sStartDate = attributes?.startDate;
        const sEndDate = attributes?.endDate;
        const sOnlineStatus = attributes?.event?.data?.attributes?.onlineStatus;
        const eventTitle = attributes?.event?.data?.attributes?.title;
        const sEeventDescription = attributes?.description
        const joinLink = attributes?.event?.data?.attributes?.joinLink?.trim();
        const sEventImage = attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.url
        const sAlternativeText = attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.alternativeText
        const requiresRegistration = !!joinLink;
        return {
            sEventImage,
            sAlternativeText,
            sStartDate,
            sTimezone,
            sEndDate,
            eventTitle,
            sEeventDescription,
            sOnlineStatus,
            requiresRegistration,
            joinLink,
        };
    }
    return null;
};
