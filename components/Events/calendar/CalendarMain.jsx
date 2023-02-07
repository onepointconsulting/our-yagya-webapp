import React from "react";
import Calendar from "./Calendar";
import Router from "next/router";
import EventsAccordion from "./EventsAccordion";
import Filter from "./Filter";
import SpecialDay from "./SpecialDay";


export default function CalendarMain({ data }) {

  return (
    <div className="mx-2 md:mx-4">
      <div className="relative mt-4 xl:mb-8 bg-white lg:flex lg:mt-12 xl:mt-16">
        <div>
          <div>
            {/* Caledar plugin */}
            <Calendar data={data} />
          </div>

          {/* filter */}
          <Filter />
        </div>

        {/* Special day or some special events */}
        <div className="w-full lg:mx-8 xl:mx-20">
          <SpecialDay />
        </div>
      </div>

      {/* Accordion */}
      <div className="w-full">
        <EventsAccordion />
      </div>
    </div>
  );
}
