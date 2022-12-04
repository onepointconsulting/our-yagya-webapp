import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../pages/_app'
import { EventItem } from './EventItem'
import { eventsAdapter } from '../../lib/eventsAdapter'
import { categoryEventsLayout } from '../../lib/apiClient'
import { useTranslation } from 'react-i18next'

const ArrowIcon = ({start, setStart, arrowDirection, isEnd}) => {

  const { t } = useTranslation();

  const iconUrl = arrowDirection === "up" ? "/img/icons/ArrowUp.png" : "/img/icons/ArrowDown.png"
  const step = arrowDirection === "up" ? -3 : +3

  const onClick = (e) => {
    console.log("PREVIOUS STATE: ", start, isEnd)
    e.preventDefault()
    if ((arrowDirection === "up" && start !== 0) || (arrowDirection === "down" && !isEnd)) {
      setStart(start + step)
      console.log("NEW STATE: ", start, isEnd)
    }
  }

  return (
    <div>
      <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 cursor-poainter">
        <a href="#" onClick={onClick}>
          <img className="w-8 xs:w-10" src={iconUrl} alt={t('more')}/>
        </a>
      </h1>
    </div>
  );
};

/**
 * Loops through events in category
 */
const EventBlock = ({adaptedEvents, category}) => {
  const { locale } = useContext(GlobalContext);
  const [events, setEvents] = useState(adaptedEvents)
  const [start, setStart] = useState(0)
  const [isEnd, setEnd] = useState(false)

  useEffect(() => {
    async function fetchData() {
      console.log("NEW STATE DOUBLE: ", start, isEnd)
      const response = await categoryEventsLayout(locale, category, start)
      if (response.data.eventSessions.data.length > 0) {
        setEvents(eventsAdapter(response))
        setEnd(false)
      } else {
        // if no more data
        setEnd(true)
        setStart(start - 3) // end-of-records hack (due to delayed eof detection)
      }
    }
    fetchData();
  }, [start])

  return (
      /* TODO: Set a fixed events box height */
      <div className="w-full bg-gray-200">
        <>
          <div className="py-2 pl-4 pr-2 text-[1.2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
            {category}
          </div>
        </>
        <ArrowIcon start={start} setStart={setStart} arrowDirection="up" isEnd = {isEnd}/>
        {!!events && events[category]?.map((event, i) => {
          return <EventItem locale={locale} event={event} key={i} />
        })}
        <ArrowIcon start={start} setStart={setStart} arrowDirection="down" isEnd = {isEnd}/>
      </div>
  )
}

const EventBlocks = ({ adaptedEvents, eventsCategories }) => {

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
            <EventBlock category={category} adaptedEvents={adaptedEvents} key={i}/>
        );
      })}
    </div>
  );
};

export default EventBlocks;
