import React from "react";
import Calendar from "./Calendar";
import Router from "next/router";
import EventsAccordion from "./EventsAccordion";
import Filter from "./Filter";
import SpecialDay from "./SpecialDay";

const ArrowBack = () => {
  return (
    <>
      <div className="absolute md:relative w-8 md:w-12 xl:w-14 my-7 md:pl-4">
        <img
          onClick={() => Router.back()}
          className="w-4 cursor-pointer"
          src="/img/ArrowSide.png"
          alt=""
        />
      </div>
    </>
  );
};

export default function CalendarMain({ data }) {

  return (
    <div className="mx-2 md:mx-4">
      <div className="relative mt-4 xl:mb-8 bg-white lg:flex lg:mt-12 xl:mt-16">
        <div>
          <div className="flex">
            {" "}
            <ArrowBack />
            {/* Caledar plugin */}
            <Calendar data={data} />
          </div>

          {/* filter */}
          <Filter />
        </div>

        {/* Special day or some special events */}
        <div className="w-full lg:mx-20">
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
