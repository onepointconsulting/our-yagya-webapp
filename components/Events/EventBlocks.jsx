import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../pages/_app'
import { EventItem } from './EventItem'
import { useTranslation } from 'react-i18next'

const ArrowIcon = ({start, setStart}) => {

  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault()
    setStart(start + 5)
  }

  return (
    <div>
      <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 lg:py-8 cursor-poainter">
        <a href="#" onClick={onClick}>
          <img className="w-8 xs:w-10" src="/img/icons/ArrowDown.png" alt={t('more')}/>
        </a>
      </h1>
    </div>
  );
};

/**
 * Loops through events in category
 * @param adaptedEvents
 * @param category
 * @returns {JSX.Element}
 * @constructor
 */
const EventBlock = ({adaptedEvents, category}) => {
  const { locale } = useContext(GlobalContext);
  const [events, setEvents] = useState()
  const [start, setStart] = useState()

  useEffect(() => {
    setEvents(adaptedEvents)
    setStart(0)
  }, [adaptedEvents])

  useEffect(() => {
    // TODO: pull new data of specific category.
    console.log('Start', start)
  }, [start])

  return (
      <div className="w-full bg-gray-200">
        <>
          <div className="py-2 pl-4 pr-2 text-[1.2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
            {category}
          </div>
        </>
        {!!events && events[category]?.map((event, i) => {
          return <EventItem locale={locale} event={event} key={i} />
        })}
        <ArrowIcon start={start} setStart={setStart}/>
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
