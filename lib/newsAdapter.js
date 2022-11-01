

export const newsAdapter = (data) => {
    const news = data?.data?.news
    console.log('newsAdapter data', JSON.stringify(news))
    return news
}