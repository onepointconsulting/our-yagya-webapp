import React, { useContext, useMemo } from "react";
import { useState } from "react";
import Link from "../../../node_modules/next/link";
import SocialMediaIcons from "../../NewsPage/SocialMediaIcons";
import { useTranslation } from "react-i18next";
import { CalendarContext } from "../../../context/CalendarContext";
import { calendarFooterEventsAdapter } from "../../../lib/eventsAdapter";
import { formateDate } from "../../../lib/dateAdapter";

const ButtonsAccordion = () => {
  const { t } = useTranslation();

  return (
    <div className="w-32 md:w-36 lg:w-72">
      <div className="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer events-center">
        <div>
          <img
            className="w-4 xs:w-6 lg:w-12"
            src="/img/icons8-info-50.png"
            alt="more info"
          />
        </div>
        <Link href="#">
          <div className="md:pl-3 lg:pl-4 text-[9px] md:text-lg lg:text-xl xl:text-2xl text-white">
            {t("More Info")}
          </div>
        </Link>
      </div>

      {/* Regsiter link button */}
      <div className="flex rounded-md bg-gold1 events-center text-center my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer">
        <div>
          <img
            className="w-4 xs:w-6 lg:w-12"
            src="/img/icons8-pencil-64.png"
            alt="register"
          />
        </div>
        <Link href="#">
          <a target="_blank">
            <div className="md:pl-3 lg:pl-4 text-[9px] md:text-lg lg:text-xl xl:text-2xl text-white">
              {t("Register")}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default function EventsAccordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const { calendarData } = useContext(CalendarContext);
  const { locale } = calendarData

  const events = useMemo(() => {
    return calendarFooterEventsAdapter(calendarData)
    }, [calendarData]);

  return (
    <div>
      {events.map((event, index) => (
        <div
          key={index}
          className="relative bg-white my-4 rounded-lg shadow-lg"
        >
          {/* Accordion header */}
          <div
            onClick={() => handleAccordionClick(index)}
            className="flex justify-between bg-gray-100 cursor-pointer md:events-center metropolis_medium pr-4"
          >
            <div className="flex events-center w-[93%] md:w-4/5 lg:w-5/6 xl:w-5/6">
              <div className="relative w-[30vw] md:w-96">
                <img
                  className="object-cover w-full h-full"
                  src={event.imageUrl}
                  alt={event.imageUrl}
                />
              </div>
              <div className="px-2 md:px-4 w-[9rem] md:w-[inherit] lg:w-full">
                <h1 className="text-xs font-medium leading-4 text-redfull xs:text-[14px] md:text-xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                  {event.title}
                </h1>
                <h1 className="text-xs font-medium leading-4 text-redfull xs:text-[14px] md:text-lg xl:text-2xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                  [{event.subTitle}]
                </h1>
                <div className="md:flex events-center justify-between w-full">
                  <div>
                    <p className="leading-6 text-[10px] text-gray-700 md:text-[1rem] lg:text-[1.125rem]">
                    {formateDate(
                          event.startDateTime,
                          locale,
                          "dd LLLL yyyy"
                        )}
                    </p>
                  </div>

                  <div className="leading-6 text-[10px] text-gray-700 md:text-[1rem] lg:text-[1.125rem]">
                    <p>{formateDate(
                          event.startDateTime,
                          locale,
                          "hh:mm a ZZZZ"
                        )}</p>
                  </div>
                </div>
              </div>
            </div>

            <ButtonsAccordion />
          </div>

          {/* Accordion body */}
          {activeIndex === index && (
            <div
              className="relative  overflow-hidden transition duration-500 ease-in-out w-full text-white bg-white shadow-md metropolis_medium"
              style={{ height: activeIndex === index ? "auto" : "0" }}
            >
              <div className="flex flex-col-reverse justify-between p-3 lg:flex-row xl:p-5">
                <div className="w-full">
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl">
                    {event.description}
                  </p>
                </div>

                {/* <!-- img --> */}
                <div className="relative flex justify-between events-end flex-col w-full lg:w-max">
                  <div className="md:w-full lg:w-96 xl:w-10/12">
                    <img
                      className="object-cover w-auto mx-auto lg:h-auto w-full"
                      src="https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </div>
                  <div className="w-10 text-center relative">
                    <SocialMediaIcons eventIndex={event} />
                  </div>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
