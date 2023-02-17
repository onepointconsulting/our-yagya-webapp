import React, { useContext, useMemo } from "react";
import { useState } from "react";
import SocialMediaIcons from "../../NewsPage/SocialMediaIcons";
import { useTranslation } from "react-i18next";
import { CalendarContext } from "../../../context/CalendarContext";
import { calendarFooterEventsAdapter } from "../../../lib/calendarAdapter";
import { formateDate } from "../../../lib/dateAdapter";
import MoreInfoButton from "../MoreInfoButton";
import JoinLinkButton from "../JoinLinkButton";

const ButtonsAccordion = ({ event }) => {
  const { t } = useTranslation();

  return (
    <div className="w-32 md:w-40 lg:w-52 xl:w-60">
      {/* More info button */}

      <MoreInfoButton event={event} />

      {/* Register/join link button */}
      <JoinLinkButton event={event} />
    </div>
  );
};

export default function EventsAccordion() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [bgColor, setBgColor] = useState("#f3f4f6");
  const [dateColor, setDateColor] = useState("#9ca3af");
  const [titleColor, setTitleColor] = useState("red");

  const handleAccordionClick = (e, index) => {
    e.preventDefault();
    setActiveIndex(activeIndex === index ? -1 : index);
    setBgColor(activeIndex === index ? "#f3f4f6" : "#bf8e23");
    setDateColor(activeIndex === index ? "#9ca3af" : "#fff");
    setTitleColor(activeIndex === index ? "red" : "#fff");
  };

  const { calendarData } = useContext(CalendarContext);
  const { locale } = calendarData;

  const events = useMemo(() => {
    return calendarFooterEventsAdapter(calendarData);
  }, [calendarData]);

  return (
    <div>
      {events.map((event, index) => (
        <div
          key={index}
          className="relative my-4 bg-white rounded-lg shadow-lg"
        >
          {/* Accordion header */}
          <div
            className="flex items-center justify-between pr-1 cursor-pointer md:pr-4 metropolis_medium"
            style={{
              backgroundColor: activeIndex === index ? bgColor : "#f3f4f6",
            }}
          >
            <div className="flex items-center w-[93%] md:w-4/5 lg:w-5/6 xl:w-5/6">
              {/* event img */}
              <div
                className="relative w-20 h-16 xss:w-36 md:w-44 lg:w-80 xl:w-[22rem] xss:h-24 md:h-32 xl:h-40"
                onClick={(e) => handleAccordionClick(e, index)}
              >
                <img
                  className="object-cover w-full h-full"
                  src={event.imageUrl}
                  alt={event.title}
                />
              </div>

              {/* event title and date */}
              <div
                className="px-2 md:px-4 w-36 xss:w-40 md:w-[23rem] lg:w-full"
                onClick={(e) => handleAccordionClick(e, index)}
              >
                <div
                  style={{
                    color: activeIndex === index ? "white" : titleColor,
                  }}
                >
                  <h1 className="text-xs font-medium leading-4 xs:text-[14px] md:text-xl xl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                    {event.title}
                  </h1>
                  
                  {!!event.subTitle && (
                    <h1 className="text-xs font-medium leading-4 xs:text-[14px] md:text-lg xl:text-xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                      [{event.subTitle}]
                    </h1>
                  )}
                </div>

                <div
                  className="items-center justify-between w-full pt-2 md:flex"
                  style={{ color: activeIndex === index ? "white" : dateColor }}
                >
                  <div>
                    <p className="text-[8px] md:text-sm lg:text-[1.125rem]">
                      {formateDate(event.startDateTime, locale, "dd LLLL yyyy")}
                    </p>
                  </div>

                  <div className="text-[8px] md:text-sm lg:text-[1.125rem]">
                    <p>
                      {formateDate(event.startDateTime, locale, "hh:mm a ZZZZ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ButtonsAccordion event={event} />
          </div>

          {/* Accordion body */}
          {activeIndex === index && (
            <div
              className="relative w-full overflow-hidden text-white transition duration-500 ease-in-out bg-white border-b border-l border-r metropolis_medium"
              style={{ height: activeIndex === index ? "auto" : "0" }}
            >
              <div className="flex flex-col-reverse justify-between p-3 lg:flex-row xl:p-5">
                <div className="w-full">
                  <p
                    className="text-sm text-gray-400 md:text-base lg:text-lg xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  ></p>
                </div>

                {/* <!-- img --> */}
                <div className="relative flex flex-col items-end justify-between w-full lg:w-max">
                  <div className="md:w-full lg:w-[27rem] xl:w-[40rem] h-[12vh] md:h-[28vh] lg:h-[16rem] xl:h-[30rem] mx-auto lg:mx-0">
                    <img
                      className="object-cover w-full h-full mx-auto"
                      src={event.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="relative w-10 my-2 text-center">
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
