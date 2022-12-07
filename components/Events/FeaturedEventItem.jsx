import React from 'react'
import { formateDate } from '../../lib/dateAdapter'
import Link from '../../node_modules/next/link';
import { useTranslation } from 'react-i18next'

const FeaturedEventItem = ({ event, locale }) => {
    const { t } = useTranslation();

    if(event.image.length === 0 ) {
        return []
    }
    return (
        <div className="flex">
            <div className="w-full my-3">
                <Link className='cursor-pointer' href={`/single_event/${event.id}`}>
                    <div
                        className="flex items-center justify-between bg-gray50 cursor-pointer">
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
                                <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-base lg:text-xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                                    {event.title}
                                </h1>

                                <div className="items-center justify-between w-full md:flex">
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
                                    className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-white onlnie_eve_title lg:text-sm xl:text-[13px]">
                                    {t("More Info")}
                                </div>
                            </div>

                          {event.joinLink &&  <div
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
                                    className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-white onlnie_eve_title lg:text-sm xl:text-[13px]">
                                    {t("Register")}
                                </div>
                            </div>}
                        </div>
                        
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedEventItem