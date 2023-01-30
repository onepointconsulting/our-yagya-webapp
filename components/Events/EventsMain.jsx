import React from "react";
import { getNonFeaturedCategories, getFeaturedCategory, getFeaturedEvents, getNonFeaturedEvents } from "../../lib/eventsAdapter";
import FeaturedEventBlock from "./FeaturedEventBlock";
import { imageAdapter } from "../../lib/imageAdapter";
import EventBlocks from "./EventBlocks";
import Slider from "../Slider/Slider";

export default function EventsMain({ data }) {
  const bgImage = imageAdapter(data);
  const eventsCategories = data.data.categories;
  const allEvents = data.data.events;
  const featuredCategory = getFeaturedCategory(allEvents) 

  // const adaptedEvents = processEventDates(eventsAdapter(data))

  return (
    <>
      <Slider />
      {/* Featured event category with the event background  */}

      <div className="flex justify-center w-full h-auto mb-auto bg-opacity-75 imageBack"
           style={{ background: `url(${bgImage}) center center / cover no-repeat`}}>
            
        {!!featuredCategory.id &&
        <div className="w-full">
          <FeaturedEventBlock
            featuredEvents={getFeaturedEvents(allEvents, featuredCategory.id)}
            title={featuredCategory.title}
            featuredCategoryId={featuredCategory.id}
          />
        </div>
        }
      </div> 
      <div className="my-20"></div>
      

      {/* events */}
      <div className="w-full">
        <EventBlocks
          allEvents={getNonFeaturedEvents(allEvents, featuredCategory.id)}
          eventsCategories={getNonFeaturedCategories(eventsCategories, featuredCategory.id)}
        />
      </div>
    </>
  );
}
