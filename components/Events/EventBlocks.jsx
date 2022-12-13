import EventBlock from './EventBlock'

const EventBlocks = ({ adaptedEvents, eventsCategories }) => {
  if (eventsCategories.length === 0) {
    return <></>;
  }

  if (adaptedEvents.length === 0) {
    return <></>;
  }

  const slicedEventCategories = eventsCategories.slice(1);

  return (
    <div className="grid w-full grid-cols-1 gap-2 px-2 mb-20 md:gap-4 lg:gap-8 md:px-4 lg:px-24 md:grid-cols-2">
      {slicedEventCategories.map((category, i) => {
        if (!adaptedEvents[category]) {
          return <></>;
        }
        return (
          <EventBlock category={category} adaptedEvents={adaptedEvents}  key={i} />
        );
      })}
    </div>
  );
};

export default EventBlocks;
