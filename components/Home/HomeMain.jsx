import React, { useContext } from 'react'
import { imageAdapter } from '../../lib/imageAdapter'
import { simpleNewsAdapter } from '../../lib/newsAdapter'
import { useTranslation } from 'react-i18next'
import { formateDate } from '../../lib/dateAdapter'
import { GlobalContext } from '../../pages/_app'
import Link from 'next/link'
import { PAGES } from '../../lib/pages'
import { IndexContext } from '../../pages'

const EventsItem = ({events}) => {
    const { locale } = useContext(GlobalContext)
    return (
        <>
            <div className="p-3">
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    {events.attributes.title}
                </div>

                <div className="p-1">
                    <span
                        className="text-[14px] text-gray-700 md:text-base">
                      {formateDate(events.attributes.timestamp, locale)}
                    </span>
                </div>
            </div>

            {/* arrow down icon */}
            <div className="absolute left-0 right-0 bottom-8">
                <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                    <Link href={PAGES.EVENTS}>
                        <a>
                            <img src="/img/icons/ArrowDown.png"
                                 alt=""/>
                        </a>
                    </Link>
                </h1>
            </div>
        </>
    )
}

const EventsBlock = ({ eventsData }) => {
    const { t } = useTranslation()
    return (
        <div
            className="relative w-full h-full pb-12 mb-2 bg-gray-200 metropolis_medium bg-opacity-95 lg:w-auto xl:pb-16 lg:mb-0">
            <div
                className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                {t('Events')}
            </div>

            <div className="overflow-y-auto metropolis_medium h-80">
                {eventsData.map((events, i) => {
                    return (
                        <EventsItem events={events} key={`events_item_${i}`} />
                    )
                })}
            </div>
        </div>
    )
}

const NewsItem = ({news}) => {
    const { locale } = useContext(GlobalContext)
    return (
        <>
            <div className="p-3">
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    {news.attributes.title}
                </div>

                <div className="p-1">
                    <span
                        className="text-[14px] text-gray-700 md:text-base">
                      {formateDate(news.attributes.timestamp, locale)}
                    </span>
                </div>
            </div>

            {/* arrow down icon */}
            <div className="absolute left-0 right-0 bottom-8">
                <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                    <Link href={PAGES.NEWS}>
                        <a>
                            <img src="/img/icons/ArrowDown.png"
                                 alt=""/>
                        </a>
                    </Link>
                </h1>
            </div>
        </>
    )
}

const NewsBlock = ({ newsData }) => {
    const { t } = useTranslation()
    return (
        <div
            className="relative w-full h-full pb-12 mb-2 bg-gray-200 metropolis_medium bg-opacity-95 lg:w-auto xl:pb-16 lg:mb-0">
            <div
                className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                {t('News')}
            </div>

            <div className="overflow-y-auto metropolis_medium h-80">
                {newsData.map((news, i) => {
                    return (
                        <NewsItem news={news} key={`news_item_${i}`} />
                    )
                })}
            </div>
        </div>
    )
}

const ClassBlock = () => {
    const { t } = useTranslation()
    return (
        <div
            className="relative w-full h-full pb-12 mb-2 bg-gray-200 fadeInTop bg-opacity-95 lg:w-auto xl:pb-16 lg:mb-0">
            <div
                className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                {' '}
                {t('Latest classes')}
            </div>
            <div className="p-4 overflow-y-auto metropolis_medium h-80 ">
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    Online GlobalSilence Retreat
                </div>
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    Silence Retreat
                </div>
                <div className="pb-3">
                <span className="text-[14px] text-gray-700 md:text-base">
                  19-20 November
                </span>
                </div>
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    Avyakt BapDada
                </div>
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    milan
                </div>
                <div className="pb-3">
                <span className="text-[14px] text-gray-700 md:text-base">
                  15 November
                </span>
                </div>
                <div
                    className="leading-5 text-[1.2rem] text-redfull md:text-2xl">
                    Dewali Festival
                </div>
                <div className="pb-3">
                <span className="text-[14px] text-gray-700 md:text-base">
                  4 November
                </span>
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-8">
                <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                    <a href="/classes.html">
                        <img src="/img/icons/ArrowDown.png" alt=""/>
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default function HomeMain () {
    const { data } = useContext(IndexContext)
    const newsData = simpleNewsAdapter(data)
    const eventsData = []
    const bgImage = imageAdapter(data)

    console.log('HomeMain data', JSON.stringify(data))

    return (
        // <!-- home page background -->
     
        <div className="flex flex-col items-center w-full">
            <div
                className="justify-center w-full h-auto mb-auto bg-opacity-75 lg:flex imageBack"
                style={{
                    background: `url(${bgImage}) center center / cover no-repeat`,
                }}
            >
                <div
                    className="grid grid-cols-1 gap-4 pt-4 pb-4 mx-4 lg:grid-cols-3 lg:pt-72">
                    <EventsBlock eventsData={eventsData}/>
                    <ClassBlock/>
                    <NewsBlock newsData={newsData}/>
                </div>
            </div>
        </div>
    )
}
