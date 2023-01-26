import EventBlock from './EventBlock'
import {getEventsByCategory, getChildrenCountByCategory} from '../../lib/eventsAdapter'

const EventBlocks = ({ allEvents, eventsCategories }) => {
  if (eventsCategories.length === 0) {
    return <></>;
  }

  if (allEvents.length === 0) {
    return <></>;
  }

  // To be removed when 'highlight' flag gets applied
  const slicedEventCategories = eventsCategories.slice(1);

  return (
    <div className="grid w-full grid-cols-1 gap-2 px-2 mb-20 md:gap-4 lg:gap-8 md:px-4 lg:px-24 md:grid-cols-2">
      {slicedEventCategories.map((category, i) => {
        const eventsByCategory = getEventsByCategory(category.title, allEvents)
        const childrenCountByCategory = getChildrenCountByCategory(category.title, allEvents)
        const hasChildren = childrenCountByCategory > 0
        if (eventsByCategory.length === 0) {
          return <></>;
        }
        return (
          <EventBlock category={category.title} categoryId={category.id} events={eventsByCategory} hasChildren={hasChildren} key={i} />
        );
      })}
    </div>
  );
};

export default EventBlocks;
