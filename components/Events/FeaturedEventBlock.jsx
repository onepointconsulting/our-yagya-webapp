import React, { useContext } from 'react'
import { formateDate } from '../../lib/dateAdapter'
import Link from '../../node_modules/next/link';
import { GlobalContext } from '../../pages/_app'
import { useTranslation } from 'react-i18next'

const FeaturedEventItem = ({ event }) => {
    const { locale } = useContext(GlobalContext);
    const { t } = useTranslation();

    if(event.image.length === 0 ) {
        return []
    }
    return (
        <div className="flex pt-3">
            <div className="w-full pb-4">
                <Link className='cursor-pointer' href={`/single_event/${event.id}`}>
                    <div
                        className="flex items-center justify-between pt-[0.5rem] cursor-pointer">
                        <div
                            className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                            {/* <!-- image --> */}

                            <div className="relative w-[27vw] md:w-36">
                                <img
                                    className="object-cover w-full h-full"
                                    src={event.image}
                                    alt={event.alternativeText}
                                    title={event.alternativeText}
                                />
                            </div>

                            {/* title and date */}
                            <div
                                className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                                <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-xl lg:text-2xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                                    {event.title}
                                </h1>

                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                                            {formateDate(event.date, locale, 'dd LLLL yyyy')}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                                            {formateDate(event.date, locale, 'hh:mm a')} {event.timezone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* more info and registeration */}
                        <div className="w-20 xs:w-24 xl:w-36">
                            <div
                                className="flex items-center px-1 py-1 my-1 rounded-lg bg-gold1">
                                <div>
                                    <img
                                        className="w-4 xs:w-6 lg:w-7"
                                        src="/img/icons8-info-50.png"
                                        alt={event.title}
                                        title={event.title}
                                    />
                                </div>
                                <div
                                    className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px]">
                                    {t("More Info")}
                                </div>
                            </div>

                            <div
                                className="flex items-center px-1 py-1 my-1 text-center rounded-lg bg-gold1">
                                <div>
                                    <img
                                        className="w-4 xs:w-6 lg:w-7"
                                        src="/img/icons8-pencil-64.png"
                                        alt={event.title}
                                        title={event.title}
                                    />
                                </div>
                                <div
                                    className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px]">
                                    
                                    {t("Register")}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}

const EventArrow = () => {
    return (
        <h1 className="flex justify-center my-4 text-6xl text-center text-gray-400 cursor-pointer md:my-10">
            <a href="/events.html">
                <img
                    className="w-8 xs:w-10 md:w-12"
                    src="/img/icons/ArrowDown.png"
                    alt=""
                />
            </a>
        </h1>
    )
}

export default function FeaturedEventBlock ({adaptedEvents, title = 'You forgot the title',}) {
    return (
        <div
            className="flex items-center justify-center w-full mt-28 md:mt-36 lg:mt-52">
            <div
                className="relative w-full h-full ml-auto mr-auto bg-[#ffffff] bg-opacity-95 lg:m-4 md:w-11/12 lg:w-10/12">
                <div
                    className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-gold1 md:text-4xl">
                    {title}
                </div>
                {!!adaptedEvents[title] ? adaptedEvents[title].map((event, i) => {
                    return (
                        <FeaturedEventItem event={event}
                                           key={`featuredEvent_${i}`}/>
                    )
                }) : <></>}
                <EventArrow/>
            </div>
        </div>
    )
}
