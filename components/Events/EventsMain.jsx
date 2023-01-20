import React from 'react'
import { getChildrenCountFirstCategory } from '../../lib/eventsAdapter'
import FeaturedEventBlock from './FeaturedEventBlock'
import { imageAdapter } from '../../lib/imageAdapter'
import EventBlocks from './EventBlocks'
import Slider from '../Slider/Slider'

export default function EventsMain ({ data }) {
  const bgImage = imageAdapter(data)
  const eventsCategories = data.data.categories
  const allEvents = data.data.events
  const childrenCountFeatured = getChildrenCountFirstCategory(allEvents)
  const featuredHasChildren = childrenCountFeatured > 0
  const firstCategoryId = eventsCategories[0].id

  // const adaptedEvents = processEventDates(eventsAdapter(data))

  return (
    <>
      <Slider/>

      <div
        className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
        style={{
          background: `url(${bgImage}) center center / cover no-repeat`,
        }}
      >
        {/* Featured event with the event background  */}
        <div className="w-full">
        <FeaturedEventBlock
            allEvents={allEvents}
            title={eventsCategories[0].title}
            hasChildren={featuredHasChildren}
            categoryId={firstCategoryId}
          />
        </div>
      </div>

      {/* events */}
      <div className="w-full">
        <EventBlocks
          allEvents={allEvents}
          eventsCategories={eventsCategories}
        />
      </div>
    </>
  )
}
