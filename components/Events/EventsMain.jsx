import React, { useContext } from 'react'
import { eventsAdapter } from '../../lib/eventsAdapter'
import { GlobalContext } from '../../pages/_app'
import { categoriesAdapter } from '../../lib/globalPropertiesAdapter'
import { imageAdapter } from '../../lib/imageAdapter'
import EventBlocks from './EventBlocks'
import EventBlock from './EventBlock'

export default function EventsMain ({ data }) {
    const { globalProperties } = useContext(GlobalContext)
    const bgImage = imageAdapter(data)

    const eventsCategories = categoriesAdapter(globalProperties,
        'eventsCategories')
    const adaptedEvents = eventsAdapter(data)

    return (
        <>
            <div
                className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
                style={{
                    background: `url(${bgImage}) center center / cover no-repeat`,
                }}
            >
                {/* Featured event with the event background */}
                <div className="w-full mx-2 md:mx-4 lg:mx-24 pt-96">
                    {/* <FeaturedEventBlock
                        adaptedEvents={adaptedEvents}
                        title={eventsCategories[0]}
                    /> */}
                    <EventBlock
                    adaptedEvents={adaptedEvents}
                    category={"Featured Events"}
                />
                </div>
            </div>

            {/* events */}
            <div className="w-full mt-24">
                <EventBlocks
                    adaptedEvents={adaptedEvents}
                    eventsCategories={eventsCategories}
                />
            </div>
        </>
    )
}
