export const newsAdapter = (data) => {
    const test = data
    console.log("newstest", test);

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
            if(!!parent) {
                previousValue[category].parent = parent
            }
            previousValue[category].news.push({ title, timestamp })
            return previousValue
        }, {})
        return Object.entries(newsWithoutParent).reduce((previousValue, currentValue) => {
            if(currentValue[1].parent) {
                let previousValueElementParent = previousValue[currentValue[1].parent]
                if(!previousValueElementParent) {
                    previousValueElementParent =
                        previousValue[currentValue[1].parent] = {
                        news: [],
                        children: []
                    }
                }
                if(!previousValueElementParent.children) {
                    previousValueElementParent.children = []
                }
                previousValueElementParent
                    .children.push({
                        [currentValue[0]]: currentValue[1]
                    })
            } else {
                if(!previousValue[currentValue[0]]) {
                    previousValue[currentValue[0]] = currentValue[1]
                } else {
                    previousValue[currentValue[0]].news =
                        [...previousValue[currentValue[0]].news, currentValue[1].news]
                }
            }
            return previousValue
        }, {})
    }
    return []
}
