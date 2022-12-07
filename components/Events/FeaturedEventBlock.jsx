import React from "react"
import FeaturedEventItem from './FeaturedEventItem'


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
                    className="py-2 pl-4 pr-2 text-xl text-slate-50 filosofia_italic bg-gold1 md:text-3xl xl:text-4xl">
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
