import React from 'react'
import Link from '../../node_modules/next/link'
import FeaturedEventItem from './FeaturedEventItem'

const EventArrow = ({ categoryId, showCard, total }) => {
  let href 
  if (showCard) {
    if (total < 5)
      href = `/event/blog/${categoryId}`
      else
      href = `/calendar`
  } else 
    href = `/event/category/${categoryId}`

  return (
    <h1
      className="flex justify-center py-6 text-6xl text-center text-gray-400 cursor-pointer md:py-12">
      <Link href={href}>
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
  featuredEvents,
  title = 'You forgot the title',
  featuredCategoryId
}) {
  const hasChildren = featuredEvents.children_count > 0
  const total = featuredEvents.total
  const showCard = featuredEvents.show_card
  const featuredEventsList = featuredEvents.events

  return (
    <>

      <div
        className="flex items-center justify-center w-full mt-28 md:mt-36 lg:mt-52 bg-transparent">

        <div
          className="relative w-full h-full ml-auto mr-auto lg:m-4 md:w-11/12 lg:w-10/12">
          {!!featuredEventsList && featuredEventsList.length > 0 && (
            <div className="w-full mx-auto">
              <div
                className="py-2 pl-4 pr-2 text-[2rem] text-white filosofia_italic bg-gold1 md:text-4xl">
                {title}
              </div>
              {featuredEventsList.slice(0, 4).map((event, i) => {
                return (
                  <FeaturedEventItem event={event} key={`featuredEvent_${i}`}/>
                )
              })}
              {(hasChildren || showCard) ? 
                  <EventArrow categoryId={featuredCategoryId} 
                    showCard={showCard} total={total}/> : 
                    <div className="py-6 md:py-12"></div>}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
