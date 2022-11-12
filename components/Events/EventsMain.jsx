import React, { useContext } from "react";
import { eventsAdapter } from "../../lib/eventsAdapter";
import FeaturedEventBlock from "./FeaturedEventBlock";
import { GlobalContext } from "../../pages/_app";
import { categoriesAdapter } from "../../lib/globalPropertiesAdapter";
import { imageAdapter } from "../../lib/imageAdapter";
import EventBlocks from "./EventBlocks";

export default function EventsMain({ data }) {
  const { globalProperties } = useContext(GlobalContext);
  const bgImage = imageAdapter(data);

  
  const eventsCategories = categoriesAdapter(globalProperties,"eventsCategories" );
      const adaptedEvents = eventsAdapter(data);

     console.log("eventsCategories",adaptedEvents)
  return (
    <>
      <div
        className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
        style={{
          background: `url(${bgImage}) center center / cover no-repeat`,
        }}
      >
           {/* Featured event with the event background */}
        <div className="w-full mx-4">
          <FeaturedEventBlock
            adaptedEvents={adaptedEvents}
            title={eventsCategories[0]}
          />
        </div>
      </div>

      {/* events */}
      <div className="w-full">
        <EventBlocks
          adaptedEvents={adaptedEvents}
          eventsCategories={eventsCategories}
        />
      </div>
    </>
  );
}
