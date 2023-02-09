import { createContext } from 'react'
import NewsLists from '../../../components/NewsPage/List/NewsList'
import Slider from '../../../components/Slider/Slider'
import { newsLayout } from '../../../lib/apiClient'
import { adaptCustomPage } from '../../../lib/pageAdapter'

export const NewsContext = createContext({ data: {} })

export default function NewsList({ data }) {

    return (
        <NewsContext.Provider value={{ data }}>
            <Slider />
            <NewsLists />
        </NewsContext.Provider>
    )
}

export async function getServerSideProps(context) {
    return await adaptCustomPage(context, newsLayout)
}
