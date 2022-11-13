export const eventsAdapter = (data) => {
    const events = data?.data?.eventSessions?.data
    console. log('gdata: ', events)

    if (events.length > 0) {
        const session = events.flatMap((s) => {
            const startDate = s.attributes?.startDate
            const endDate = s.attributes?.endDate
            let categories = []
            const categoriesData = s.attributes?.event?.data?.attributes?.categories?.data
            const timeszone = s.attributes?.timezone?.data?.attributes?.abbreviation
    console. log('gdata: ', timeszone)
             
            
            if (categoriesData.length > 0) {
                for (const c of categoriesData) {
                    categories.push(c.attributes?.title)
                }
            }
            const title = s.attributes?.event?.data?.attributes?.title
            return categories.map(category => {
                return {
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
                'title': currentValue.title,
                'date': currentValue.startDate,
                'timeszone': currentValue.timeszone,
            })
            return previousValue
        }, {})
    }


    return []
}
