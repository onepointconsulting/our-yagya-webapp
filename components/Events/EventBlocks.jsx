import EventBlock from './EventBlock'
import {getEventsByCategory, getChildrenCountByCategory, getShowCardByCategory, getTotalByCategory} from '../../lib/eventsAdapter'

const EventBlocks = ({ allEvents, eventsCategories }) => {
  // console.log(allEvents, eventsCategories)
  if (eventsCategories.length === 0) {
    return <></>;
  }

  if (allEvents.length === 0) {
    return <></>;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-2 px-2 mb-20 md:gap-4 lg:gap-8 md:px-4 lg:px-24 md:grid-cols-2">
      {eventsCategories.filter(category => {
        const eventsByCategory = getEventsByCategory(category.title, allEvents)
        return eventsByCategory.length > 0
      }).map((category, i) => {
        const eventsByCategory = getEventsByCategory(category.title, allEvents)
        const childrenCountByCategory = getChildrenCountByCategory(category.title, allEvents)
        const hasChildren = childrenCountByCategory > 0
        const showCard = getShowCardByCategory(category.title, allEvents)
        const total = getTotalByCategory(category.title, allEvents)
        return (
          <EventBlock category={category.title} categoryId={category.id}
            events={eventsByCategory} 
            hasChildren={hasChildren} 
            showCard={showCard} total={total}
            key={`eventBlock-${i}`} />
        );
      })}
    </div>
  );
};

export default EventBlocks;
