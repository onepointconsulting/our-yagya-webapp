export const eventsAdapter = (data) => {
    const events = data?.data?.eventSessions?.data

    if (events.length > 0) {
        const session = events.flatMap((s) => {
            const id = s.id
            const startDate = s.attributes?.startDate
            const endDate = s.attributes?.endDate
            let categories = []
            const categoriesData = s.attributes?.event?.data?.attributes?.categories?.data
            const timeszone = s.attributes?.timezone?.data?.attributes?.abbreviation

            if (categoriesData.length > 0) {
                for (const c of categoriesData) {
                    categories.push(c.attributes?.title)
                }
            }
            const title = s.attributes?.event?.data?.attributes?.title
            return categories.map(category => {
                return {
                    id,
                    category: category,
                    title,
                    startDate,
                    endDate,
                    timeszone
                }
            })
          })
        return session.reduce((previousValue, currentValue) => {
            if (!previousValue[currentValue.category]) {
                previousValue[currentValue.category] = []
            }
            previousValue[currentValue.category].push({
                'id': currentValue.id,
                'title': currentValue.title,
                'date': currentValue.startDate,
                'timeszone': currentValue.timeszone,
            })
            return previousValue
        }, {})
    }


    return []
}
