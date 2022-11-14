import React, { useContext } from 'react'
import { eventsAdapter } from '../../lib/eventsAdapter'
import FeaturedEventBlock from './FeaturedEventBlock'
import { GlobalContext } from '../../pages/_app'
import { categoriesAdapter } from '../../lib/globalPropertiesAdapter'
import { imageAdapter } from '../../lib/imageAdapter'
import EventBlocks from './EventBlocks'

export default function EventsMain ({ data }) {
    const { globalProperties } = useContext(GlobalContext)

    console.log('EventsMain', JSON.stringify(data))

    const eventsCategories = categoriesAdapter(globalProperties,
        'eventsCategories', '::')
    const adaptedEvents = eventsAdapter(data)
    const bgImage = imageAdapter(data)

    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <div
                    className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
                    style={{
                        background: `url(${bgImage}) center center / cover no-repeat`,
                    }}
                >
                    <FeaturedEventBlock adaptedEvents={adaptedEvents}
                                        title={eventsCategories[0]}/>
                    {' '}
                    <EventBlocks adaptedEvents={adaptedEvents}
                                 eventsCategories={eventsCategories} />

                </div>
            </div>
        </div>
    )
}
