
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
    // debugger;
    const singleEventData = data?.data?.eventSessions?.data;

    if (singleEventData.length > 0) {
        const sTimezone = singleEventData[0]?.attributes?.timezone?.data?.attributes;
        const sStartDate = singleEventData[0]?.attributes?.startDate;
        const sEndDate = singleEventData[0]?.attributes?.endDate;
        const sOnlineStatus = singleEventData[0]?.attributes?.event?.data?.attributes?.onlineStatus;
        const eventDescription = singleEventData[0]?.attributes?.event?.data?.attributes?.title;
        const joinLink = singleEventData[0]?.attributes?.event?.data?.attributes?.joinLink;
        const requiresRegistration = "Registration Required";

        // Join link checking function (INcomplete);

        // if(joinLink.length > 0) {
        //     return requiresRegistration
        // } else {
        //     return ""
        // }
        return {
            sStartDate,
            sTimezone,
            sEndDate,
            sOnlineStatus,
            eventDescription,
            requiresRegistration,
            joinLink,
        };
    }
    return "";
};
