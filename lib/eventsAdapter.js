export const eventsAdapter = (data) => {
    const events = data?.data?.eventSessions?.data;

    if (events.length > 0) {
        const session = events.flatMap((s) => {
            const id = s.id;
            const startDate = s.attributes?.startDate;
            const endDate = s.attributes?.endDate;
            let categories = [];
            const categoriesData = s.attributes?.event?.data?.attributes?.categories?.data;
            const image = s.attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.url;
            const alternativeText = s.attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.alternativeText;
            const timeszone = s.attributes?.timezone?.data?.attributes?.abbreviation;
            const title = s.attributes?.event?.data?.attributes?.title;
debugger;
            if (categoriesData.length > 0) {
                for (const c of categoriesData) {
                    categories.push(c.attributes?.title);
                }
            }
            return categories.map((category) => {
                return {
                    id,
                    category: category,
                    title,
                    startDate,
                    endDate,
                    timeszone,
                    image,
                    alternativeText,
                };
            });
        });

        return session.reduce((previousValue, currentValue) => {
            if (!previousValue[currentValue.category]) {
                previousValue[currentValue.category] = [];
            }
            previousValue[currentValue.category].push({
                id: currentValue.id,
                title: currentValue.title,
                date: currentValue.startDate,
                timeszone: currentValue.timeszone,
                image: currentValue.image,
                alternativeText: currentValue.alternativeText,
            });
            return previousValue;
        }, {});
    }

    return [];
};
