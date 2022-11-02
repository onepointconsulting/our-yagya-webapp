export const newsAdapter = (data) => {
    const news = data?.data?.news?.data
    if (news.length > 0) {
        const newsWithoutParent = news.map(n => {
            const category = n.attributes?.category?.data?.attributes?.title
            const parent = n.attributes?.category?.data?.attributes?.parent?.data?.attributes?.title
            const title = n.attributes?.title
            const timestamp = n.attributes?.timestamp
            return {
                category,
                title,
                timestamp,
                parent
            }
        }).reduce((previousValue, currentValue) => {
            const { category, title, timestamp, parent } = currentValue
            if (!previousValue[category]) {
                previousValue[category] = {
                    "news": []
                }
            }
            previousValue[category].news.push({ title, timestamp, parent })
            return previousValue
        }, {})
        return newsWithoutParent
    }
    return []
}
