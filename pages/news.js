import { adaptCustomPage } from '../lib/pageAdapter'
import NewsMain from '../components/NewsPage/NewsMain'
import { newsLayout } from '../lib/apiClient'
import Slider from '../components/Slider/Slider'
import { createContext } from 'react'

export const NewsContext = createContext({ data: {} })

export default function News ({ data }) {

    return (
        <NewsContext.Provider value={{ data }}>
            <Slider/>
            <NewsMain data={data}/>
        </NewsContext.Provider>
    )
}

export async function getServerSideProps (context) {
    return await adaptCustomPage(context, newsLayout)
}
