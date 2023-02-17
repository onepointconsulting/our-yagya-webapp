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
        <EventsAccordion />
      </div>
    </div>
  );
}
