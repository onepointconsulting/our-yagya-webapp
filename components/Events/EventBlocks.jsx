import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { EventItem } from './EventItem'

const ArrowIcon = () => {
  return (
    <div>
      <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 lg:py-8 cursor-poainter">
        <a href="/events.html">
          <img className="w-8 xs:w-10" src="/img/icons/ArrowDown.png" />
        </a>
      </h1>
    </div>
  );
};

const EventBlocks = ({ adaptedEvents, eventsCategories }) => {
  const { locale } = useContext(GlobalContext);

  if (eventsCategories.length === 0) {
    return <></>;
  }

  if (adaptedEvents.length === 0) {
    return <></>;
  }

  const slicedEventCategories = eventsCategories.slice(1);

  return (
    <div className="grid w-full grid-cols-1 gap-2 px-2 mb-20 md:gap-4 lg:gap-8 md:px-4 lg:px-8 md:grid-cols-2">
      {slicedEventCategories.map((category, i) => {
        if (!!!adaptedEvents[category]) {
          return <></>;
        }
        return (
          <div className="w-full bg-gray-200" key={i}>
            {/* Going to an event from the title is not the same as the actual event */}
              <>
                <div className="py-2 pl-4 pr-2 text-[1.2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                  {category}
                </div>
              </>
            {adaptedEvents[category]?.map((event, i) => {
              return <EventItem locale={locale} event={event} key={i} />
            })}
            <ArrowIcon />
          </div>
        );
      })}
    </div>
  );
};

export default EventBlocks;
