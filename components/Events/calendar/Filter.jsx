import { useContext, useEffect } from "react";
import {
  CalendarContext,
  CALENDAR_ACTIONS,
} from "../../../context/CalendarContext";
import { getServerURL } from "../../../lib/apiConstants";
import axios from "axios";
import findStartAndEndMonth from "../../../lib/dateAdapter";
import { useTranslation } from "react-i18next";

const ONLINE_OPTON_ID = "onlineOptionId";
const IN_HOUSE_ID = "inHouseId";
const VALUE_ALL = "ALL";

const Filter = () => {
  const { t } = useTranslation();
  const { calendarData, dispatchCalendarData } = useContext(CalendarContext);
  const {
    online,
    inHouse,
    privateEvent,
    eventType,
    language,
    eventTypes,
    languages,
    venue,
    venues,
    categoryId,
  } = calendarData;
  const { start, end } = findStartAndEndMonth();

  const onEventTypeChange = (event) =>
    dispatchCalendarData({
      type: CALENDAR_ACTIONS.SET_EVENT_TYPE,
      eventType: event.target.value,
    });

  const onVenueChange = (event) =>
    dispatchCalendarData({
      type: CALENDAR_ACTIONS.SET_VENUE,
      venue: event.target.value,
    });

  const onPrivacyChange = (event) =>
    dispatchCalendarData({
      type: CALENDAR_ACTIONS.SET_PRIVATE,
      privateEvent: event.target.value,
    });

  useEffect(() => {
    const fetchData = async () => {
      const eventTypeParam =
        eventType !== VALUE_ALL ? `&eventType=${eventType}` : "";
      const languageParam =
        !language || language === VALUE_ALL ? "" : `&language=${language}`; // TODO: language is currently fixed w/ categoryId
      const venueParam = venue !== VALUE_ALL ? `&venueLocality=${venue}` : "";
      const onlineStatusParam =
        online && inHouse
          ? ""
          : online
          ? `&onlineStatus=online`
          : `&onlineStatus=inhouse`;
      const privateEventParam =
        privateEvent === "true" ? `&privateEvent=true` : "";
      const calendarUrl = `${getServerURL()}/api/events/category-events/${categoryId}?startDateTime=${start}T00:00:00.000Z&endDateTime=${end}T00:00:00.000Z${eventTypeParam}${languageParam}${venueParam}${onlineStatusParam}${privateEventParam}`;
      const result = await axios.get(calendarUrl);
      dispatchCalendarData({
        type: CALENDAR_ACTIONS.SET_EVENTS,
        events: result.data.events,
      });
    };
    if (categoryId) fetchData();
  }, [online, inHouse, eventType, language, venue, privateEvent]);

  return (
    <div className="mt-12">
      <div className="flex justify-between w-full my-4 metropolis_medium bg-filter-bg">
        <div className="w-60 px-4 py-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1 md:w-72">
          <p> {t("Filter by")}</p>

          <div className="">
            <div className="flex px-4 py-1 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-500">
              <input
                checked={calendarData.online}
                onChange={() =>
                  dispatchCalendarData({ type: CALENDAR_ACTIONS.TOGGLE_ONLINE })
                }
                type="checkbox"
                className="px-6 py-6"
                id={ONLINE_OPTON_ID}
              />
              <p className="ml-2">
                <label htmlFor={ONLINE_OPTON_ID}>{t("Online")}</label>
              </p>{" "}
            </div>

            <div className="flex px-4 py-1 text-base md:text-lg lg:text-xl xl:text-2xl text-gray-500">
              <input
                checked={calendarData.inHouse}
                onChange={() =>
                  dispatchCalendarData({
                    type: CALENDAR_ACTIONS.TOGGLE_IN_HOUSE,
                  })
                }
                type="checkbox"
                className="px-6 py-6"
                id={IN_HOUSE_ID}
              />
              <p className="ml-2">
                <label htmlFor={IN_HOUSE_ID}>{t("In house")}</label>
              </p>{" "}
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="w-full max-w-full px-4 my-4">
            <select
              className="w-full filter"
              value={eventType}
              onChange={onEventTypeChange}
            >
              <option key={`eventType-all`} value={VALUE_ALL}>
                {t("All")}
              </option>
              {eventTypes?.map((item, key) => (
                <option key={`eventType${key}`}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-full max-w-full px-4 my-4">
            <select className="w-full filter">
              <option key={`eventLanguages-all`} value={VALUE_ALL}>
                {t("All")}
              </option>
              {languages?.map((item, key) => (
                <option key={`lang${key}`}>{item}</option>
              ))}
            </select>
          </div>

          <div className="w-full max-w-full px-4 my-4">
            <select
              className="w-full filter"
              value={venue}
              onChange={onVenueChange}
            >
              <option key={`venues-all`} value={VALUE_ALL}>
                {t("All")}
              </option>
              {venues?.map((item, key) => (
                <option key={`venues${key}`}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-full max-w-full px-4 my-4">
            <select
              className="w-full filter"
              value={privateEvent}
              onChange={onPrivacyChange}
            >
              <option value="false">{t("All")}</option>
              <option value="true">{t("Private")}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
