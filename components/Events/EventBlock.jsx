import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../pages/_app";
import { EventItem } from "./EventItem";
import { eventsAdapter } from "../../lib/eventsAdapter";
import { categoryEventsLayout } from "../../lib/apiClient";
import useArrowHook from "../../hooks/useArrowHook";
import FeaturedEventItem from "./FeaturedEventItem";

const ArrowIcon = ({ start, setStart, arrowDirection, isEnd }) => {
  const [t, iconUrl, step, isOnTop, isTheEnd] = useArrowHook(
    arrowDirection,
    start,
    isEnd
  );

  const onClick = (e) => {
    e.preventDefault();
    if (
      (arrowDirection === "up" && start !== 0) ||
      (arrowDirection === "down" && !isEnd)
    ) {
      setStart(start + step);
    }
  };

  return (
    <div className="">
      {!isOnTop && !isTheEnd && (
        <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 cursor-poainter">
          <a href="#" onClick={onClick}>
            <img className="w-8 xs:w-10" src={iconUrl} alt={t("more")} />
          </a>
        </h1>
      )}
    </div>
  );
};

/**
 * Loops through events in category
 */
const EventBlock = ({ adaptedEvents, category }) => {
  const { locale } = useContext(GlobalContext);
  const [events, setEvents] = useState(adaptedEvents);
  const [start, setStart] = useState(0);
  const [isEnd, setEnd] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await categoryEventsLayout(locale, category, start);
      if (response.data.eventSessions.data.length > 0) {
        setEvents(eventsAdapter(response));
        setEnd(false);
      } else {
        // if no more data
        setEnd(true);
        setStart(start - 3); // end-of-records hack (due to delayed eof detection)
      }
    }
    fetchData();
  }, [start]);

  return (
    <div className="relative w-full bg-gray50 h-[23rem] md:h-[25rem] 2xl:h-[24rem]">
      <>
        <div className="py-2 pl-4 pr-2 text-[1.2rem] text-white capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
          {category}
        </div>
      </>

      <div>
        <ArrowIcon
          start={start}
          setStart={setStart}
          arrowDirection="up"
          isEnd={isEnd}
        />
      </div>

      {!!events &&
        events[category]?.map((event, i) => {
          if (category === "Featured Events")
            return <FeaturedEventItem locale={locale} event={event} key={i} />;
          else return <EventItem locale={locale} event={event} key={i} />;
        })}

      <div className="absolute inset-x-0 bottom-0  lg:bottom-[1rem]">
        <ArrowIcon
          start={start}
          setStart={setStart}
          arrowDirection="down"
          isEnd={isEnd}
        />
      </div>
    </div>
  );
};

export default EventBlock;
