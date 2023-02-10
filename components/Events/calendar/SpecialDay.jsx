import React, { useContext, useMemo } from "react";
import { CalendarContext } from "../../../context/CalendarContext";
import { formateDate } from "../../../lib/dateAdapter";
import { calendarSpecialDaysAdapter } from "../../../lib/eventsAdapter";

export default function SpecialDay() {
  const { calendarData } = useContext(CalendarContext);
  const locale = "en" // TODO: this should come from state
  const specialEvents = useMemo(() => {
    return calendarSpecialDaysAdapter(calendarData)
    }, [calendarData]);
    
  return (
    <div className="text-xl text-gray-900 lg:border-0 border-2 border-gold1">
      <div>
        <div className="bg-white">
          <h1 className="pb-2 ml-2 text-3xl font-light filosofia_italic md:text-4xl text-gold1 md:ml-0 md:p-2">
            Special Days
          </h1>

          <div className="metropolis_medium mt-4">
            {specialEvents?.length > 0 && specialEvents.map(event => (
            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                {event.title}
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  {formateDate(
                          event.startDateTime,
                          locale,
                          "dd LLLL yyyy"
                        )}
                  </p>
                </div>

                <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                  {formateDate(
                          event.startDateTime,
                          locale,
                          "hh:mm a ZZZZ"
                        )}{" "}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="flex justify-center py-4 text-5xl text-center text-gray-700 lg:py-6 cursor-poainter">
          <a href="/events.html">
            <img
              className="w-4 md:w-8"
              src="./img/icons/ArrowDown.png"
              alt=""
            />
          </a>
        </h1>
      </div>
    </div>
  );
}
