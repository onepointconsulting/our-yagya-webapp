import { useContext, useEffect } from "react";
import { CalendarContext, CALENDAR_ACTIONS} from "../../../context/CalendarContext";
import { getServerURL } from "../../../lib/apiConstants";
import axios from 'axios'
import findStartAndEndMonth from "../../../lib/dateAdapter";

const Filter = () => {
    
  const { calendarData, dispatchCalendarData } = useContext(CalendarContext);
  const { online, inHouse, privateEvent, eventType, language, eventTypes, languages, venue, venues, categoryId } = calendarData;
  const { start, end } = findStartAndEndMonth()

  const onEventTypeChange = (event) => {
    dispatchCalendarData({ type: CALENDAR_ACTIONS.SET_EVENT_TYPE, eventType: event.target.value})
  }

  const onVenueChange = (event) => {
    dispatchCalendarData({ type: CALENDAR_ACTIONS.SET_VENUE, venue: event.target.value})
  } 

  const onPrivacyChange = (event) => {
    dispatchCalendarData({ type: CALENDAR_ACTIONS.SET_PRIVATE, privateEvent: event.target.value})
  }

  useEffect(() => {
    const fetchData = async () => {
      const eventTypeParam = eventType !== 'ALL' ? `&eventType=${eventType}` : ''
      const languageParam = language  ? `&language=${language}` : '' // TODO: language is currently fixed w/ categoryId
      const venueParam = venue !== 'ALL' ? `&venueLocality=${venue}` : ''
      const onlineStatusParam = online && inHouse ? '' : online ? `&onlineStatus=online` : `&onlineStatus=inhouse`
      const privateEventParam = privateEvent === "true" ? `&privateEvent=true` : ""
      const result = await axios.get(`${getServerURL()}/api/events/category-events/${categoryId}?limit=5&startDateTime=${start}T00:00:00.000Z&endDateTime=${end}T00:00:00.000Z${eventTypeParam}${languageParam}${venueParam}${onlineStatusParam}${privateEventParam}`)
      dispatchCalendarData({type: CALENDAR_ACTIONS.SET_EVENTS, events: result.data.events});
    };
    if (categoryId) fetchData();
  }, [online, inHouse, eventType, language, venue, privateEvent]);

  return (
    <div className="mt-12">
      <div className="flex items-center">
        <div className="flex px-4 py-1 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1">
          <input
            checked={calendarData.online}
            onChange={() =>
              dispatchCalendarData({ type: CALENDAR_ACTIONS.TOGGLE_ONLINE })
            }
            type="checkbox"
            className="px-6 py-6"
          />
          <p className="ml-2">Online</p>{" "}
        </div>
        <div className="flex px-4 py-1 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1">
          <input
            checked={calendarData.inHouse}
            onChange={() =>
              dispatchCalendarData({ type: CALENDAR_ACTIONS.TOGGLE_IN_HOUSE  })
            }
            type="checkbox"
            className="px-6 py-6"
          />
          <p className="ml-2">In house</p>{" "}
        </div>
      </div>

      <div className="flex justify-between my-4 metropolis_medium bg-filter-bg ">
        
        <div className="relative  flex flex-col">
          <div className="px-4 py-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1">
            Filter by
          </div>
          
        </div>

        <div>
        <div className="mx-4 my-4 relative flex justify-end">
            <select className="filter appearance-none" value={eventType} onChange={onEventTypeChange}>
              <option key={`eventType-all`} value="ALL">All</option>
              {eventTypes?.map((item, key) => (<option key={`eventType${key}`}>{item}</option>))}
            </select>
          </div>
          <div className="mx-4 my-4 relative">
            <select className="filter appearance-none">
            {languages?.map((item, key) => (<option key={`lang${key}`}>{item}</option>))}
            </select>
          </div>
          <div className="mx-4 my-4 relative">
            <select className="filter appearance-none" value={venue} onChange={onVenueChange}>
            <option key={`venues-all`} value="ALL">All</option>
            {venues?.map((item, key) => (<option key={`venues${key}`}>{item}</option>))}
            </select>
          </div>
          <div className="mx-4 my-4 relative">
            <select className="filter appearance-none" value={privateEvent} onChange={onPrivacyChange}>
              <option value="false">All</option>
              <option value="true">Private</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
