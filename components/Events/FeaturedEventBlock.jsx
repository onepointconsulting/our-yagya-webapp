import React, { useContext } from "react";
import { formateDate } from "../../lib/dateAdapter";
import Link from "../../node_modules/next/link";
import { GlobalContext } from "../../pages/_app";
import { useTranslation } from "react-i18next";

const FeaturedEventItem = ({ event }) => {
  const { locale } = useContext(GlobalContext);
  const { t } = useTranslation();

  if (event.image.length === 0) {
    return [];
  }

  return (
    <>
      <div className="flex odd:bg-white even:bg-gray50 ">
        <div className="cursor-pointer w-full my-1 ">
          <div className="flex items-center justify-between">
            <Link href={`/single_event/${event.id}`}>
              <div className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                {/* <!-- image --> */}
                <div className="relative w-[27vw] md:w-36">
                  <img
                    className="object-cover w-full h-full"
                    src={event.image}
                    alt={event.alternativeText}
                    title={event.alternativeText}
                  />
                </div>

                {/* title and date */}
                <div className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                  <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-base lg:text-xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                    {event.title}
                  </h1>

                  <div className="items-center justify-between w-full md:flex">
                    <div>
                      <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(event.localizedDate, locale, "dd LLLL yyyy")}
                      </p>
                    </div>
                    <div>
                      <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(event.localizedDate, locale, "hh:mm a ZZZZ")}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* more info and registeration */}
            <div className="w-20 xs:w-24 xl:w-36">
              <div className="flex items-center px-1 py-1 my-1 rounded-lg bg-gold1">
                <div>
                  <img
                    className="w-4 xs:w-6 lg:w-7"
                    src="/img/icons8-info-50.png"
                    alt={event.title}
                    title={event.title}
                  />
                </div>
                  <Link href="/">
                <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px]">
                     {t("More Info")}
                </div>
                     </Link>
              </div>

              <div
                className={`flex items-center px-1 py-1 my-1 text-center rounded-lg bg-gold1 ${
                  event.joinLink
                    ? "bg-gold1 text-white"
                    : "bg-gray-300 text-slate-200 pointer-events-none"
                }`}
              >
                <div>
                  <img
                    className="w-4 xs:w-6 lg:w-7"
                    src="/img/icons8-pencil-64.png"
                    alt={event.title}
                    title={event.title}
                  />
                </div>
                <Link href="/">
                  <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px]">
                    {t("Register")}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

const EventArrow = () => {
  return (
    <h1 className="flex justify-center my-4 text-6xl text-center text-gray-400 cursor-pointer md:my-10">
     <Link href="https://ouryagya.netlify.app/calendar_events.html" >
     <a target="_blank">
        <img
          className="w-8 xs:w-10 md:w-12"
          src="/img/icons/ArrowDown.png"
          alt=""
        />
      </a>
     </Link>
    </h1>
  );
};

export default function FeaturedEventBlock({allEvents,title = "You forgot the title",
}) {
  return (
    <div className="w-full mt-28 md:mt-36 lg:mt-52 px-2 md:px-4 lg:px-24">
      <div className="w-full mx-auto">
        <div className="py-2 pl-4 pr-2 text-xl text-slate-50 filosofia_italic bg-gold1 md:text-3xl xl:text-4xl">
          {title}
        </div>
        {!!allEvents[title] ? (
          allEvents[title].map((event, i) => {
            return (
              <FeaturedEventItem event={event} key={`featuredEvent_${i}`} />
            );
          })
        ) : (
          <></>
        )}
        <EventArrow />
      </div>
    </div>
  );
}
