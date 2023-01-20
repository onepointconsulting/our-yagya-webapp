import React from 'react'
import Link from '../../node_modules/next/link'
import { getEventsByCategory } from '../../lib/eventsAdapter'
import FeaturedEventItem from './FeaturedEventItem'

const EventArrow = ({ categoryId }) => {
  return (
    <h1
      className="flex justify-center my-4 text-6xl text-center text-gray-400 cursor-pointer md:my-10">
      <Link href={`/event/category/${categoryId}`}>
        <img
          className="w-8 xs:w-10 md:w-12"
          src="/img/icons/ArrowDown.png"
          alt=""
        />
      </Link>
    </h1>
  )
}

export default function FeaturedEventBlock ({
  allEvents,
  title = 'You forgot the title',
  hasChildren,
  categoryId,
}) {

  const eventsByCategory = getEventsByCategory(title, allEvents)

  return (
    <>

        <div className="w-full mt-28 md:mt-36 lg:mt-52 px-2 md:px-4 lg:px-24">
          {!!eventsByCategory && eventsByCategory.length > 0 && <div className="w-full mx-auto">
            <div
              className="py-2 pl-4 pr-2 text-xl text-slate-50 filosofia_italic bg-gold1 md:text-3xl xl:text-4xl">
              {title}
            </div>
            {
              eventsByCategory.slice(0, 4).map((event, i) => {
                return (
                  <FeaturedEventItem event={event} key={`featuredEvent_${i}`}/>
                )
              })
            }
            {!!hasChildren &&
              <EventArrow categoryId={categoryId}/>
            }
          </div>}
        </div>
    </>
  )
}
