import React, { useContext, useEffect } from "react";
import Calendar from "./Calendar";
import EventsAccordion from "./EventsAccordion";
import Filter from "./Filter";
import SpecialDays from "./SpecialDays";
import { CalendarContext, CALENDAR_ACTIONS } from "../../../context/CalendarContext";
import { calendarFiltersAdapter } from "../../../lib/calendarAdapter";


export default function CalendarMain({ data }) {

  const { dispatchCalendarData } = useContext(CalendarContext);
  const { filters, events, categoryId, locale } = data.data
  const adaptedFilters = calendarFiltersAdapter(filters)

  // Migrating all data into the state
  useEffect(()=> {
    dispatchCalendarData({ type: CALENDAR_ACTIONS.SET_EVENTS, events: events})
    dispatchCalendarData({ type: CALENDAR_ACTIONS.SET_FILTERS,
      eventTypes: adaptedFilters.eventTypes,
      venues: adaptedFilters.venues,
      languages: adaptedFilters.languages
    })
    dispatchCalendarData({ type: CALENDAR_ACTIONS.SET_PAGE_DATA, categoryId, locale })
  }, [])

  return (
    <div className="mx-2 md:mx-4">
      <div className="relative mt-4 xl:mb-8 bg-white lg:flex lg:mt-12 xl:mt-16">
        <div>
          <div>
            {/* Calendar plugin */}
            <Calendar />
          </div>

          {/* filter */}
          <Filter />
        </div>

        {/* Special day or some special events */}
        <div className="w-full lg:mx-8 xl:mx-20">
          <SpecialDays />
        </div>
      </div>

      {/* Accordion */}
      <div className="w-full">
      <div className="flex justify-start filosofia_italic my-8">
        <div className="flex items-center justify-around">
            <img src="/img/arrow-left.png" className="w-8 h-8 p-1 mr-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10" />
            <span className="mt-1 text-3xl md:text-4xl text-gold1"> 12/2/21</span>
            <img src="/img/asset1.png" className="w-8 h-8 p-1 ml-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10" />
        </div>
    </div>
        <EventsAccordion />
      </div>

    </div>
  );
}
