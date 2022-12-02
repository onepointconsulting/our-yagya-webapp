import React from "react";
import Calendar from "./Calendar";
import Router from "next/router";

const Filter = () => {
  return (
    <div className="flex justify-between my-4 metropolis_medium bg-filter-bg ">
      <div className="px-4 py-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1">
        Filter by
      </div>

      <div className="">
        <div className="mx-4 my-4 relative flex justify-end">
          <select className="filter appearance-none">
            <option>Meditation</option>
            <option>Talks</option>
            <option>Reads</option>
          </select>
        </div>
        <div className="mx-4 my-4 relative">
          <select className="filter appearance-none">
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="mx-4 my-4 relative">
          <select className="filter appearance-none">
            <option>Five docks</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="mx-4 my-4 relative">
          <select className="filter appearance-none">
            <option>suitable for BKS</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const accordinData = [

  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
  {
    image: "/img/Rectangle.png",
    title: "Experience Peace and Calm in Your Own Home Angel[Los Angeles]",
    date: "7 December 2021",
    time: "6:30-8:30pm EDT",
  },
];

const SpecialDay = () => {
  return (
    <div className="text-xl text-gray-900 lg:border-0 border-2 border-gold1">
      <div>
        <div className="bg-slate-50">
          <h1 className="pb-2 ml-2 text-3xl font-light filosofia_italic md:text-4xl text-gold1 md:ml-0 md:p-2">
            Special Days
          </h1>

          <div className="metropolis_medium mt-4">
            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                Humans rights day
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                    7 December 2021
                  </p>
                </div>

                <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                    6:30-8:30pm{" "}
                    <span className="underline underline-offset-2">EDT</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                Christmas Day
              </div>
              <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                10 December 2021
              </div>
            </div>

            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                13 December 2021
              </div>
            </div>

            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                    7 December 2021
                  </p>
                </div>

                <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                  <p>
                    6:30-8:30pm{" "}
                    <span className="underline underline-offset-2">EDT</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
                ancestor soul anniversay: Santri Dadi
              </div>
              <div className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
                13 December 2021
              </div>
            </div>
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
};

const EventsAccordion = () => {
  return (
    <div className="relative mx-auto">
      <div className="flex justify-start filosofia_italic">
        <div className="flex items-center justify-around">
          <img
            src="/img/arrow-left.png"
            className="w-8 h-8 p-1 mr-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10"
          />
          <span className="mt-1 text-3xl md:text-4xl text-gold1"> 12/2/21</span>
          <img
            src="/img/asset1.png"
            className="w-8 h-8 p-1 ml-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10"
          />
        </div>
      </div>

      <div className="xl:my-8">
        <div className="flex">
          <div className="w-full pb-4">
            {/* <!-- online events section 1 --> */}
            {accordinData.map((ed, i) => {
              return (
                <>
           <div className="relative w-full my-2" key={i}>
                    <div className="flex justify-between bg-gray-100 cursor-pointer md:items-center eventAccordion metropolis_medium">
                        <div className="flex items-center w-[93%] md:w-4/5 lg:w-5/6 xl:w-5/6">

                      
                        <div className="relative w-[27vw] md:w-36">
                                <img className="object-cover w-full h-full"    src={ed.image}
                            alt={ed.image}
                          />
                            </div>
                        <div className="px-2 md:px-4 w-[9rem] md:w-[inherit] lg:w-full">
                          <h1 className="text-xs font-medium leading-4 text-redfull xs:text-[14px] md:text-2xl xxl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                            {ed.title}
                          </h1>

                          <div className="md:flex items-center justify-between w-full">
                            <div>
                              <p className="leading-6 text-[10px] text-gray-700 md:text-[1rem] lg:text-[1.125rem]">
                                {ed.date}
                              </p>
                            </div>

                            <div className="leading-6 text-[10px] text-gray-700 md:text-[1rem] lg:text-[1.125rem]">
                              <p>{ed.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[10rem] xs:w-24 xl:w-32">
                        <div className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                          <div>
                            <img
                              className="w-4 xs:w-6 lg:w-7"
                              src="/img/icons8-info-50.png"
                              alt=""
                            />
                          </div>
                          <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                            <a href="/event_card.html"> more info</a>
                          </div>
                        </div>

                        <div className="flex items-center px-1 py-1 my-1 rounded-lg cursor-pointer bg-gold1">
                          <div>
                            <img
                              className="w-4 xs:w-6 lg:w-7"
                              src="/img/icons8-pencil-64.png"
                              alt=""
                            />
                          </div>
                          <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-base">
                            join now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* <!-- arrow down icon --> */}
        <div>
          <h1 className="flex justify-center py-4 text-5xl text-center text-gray-700 lg:py-8 cursor-poainter">
            <a href="/events.html">
              <img
                className="w-8 xl:w-16"
                src="./img/icons/ArrowDown.png"
                alt=""
              />
            </a>
          </h1>
        </div>
      </div>

      
    </div>
  );
};

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

export default function CalendarMain() {
  return (
    <div className="mx-2 md:mx-4">
      <div className="relative mt-4 xl:mb-8 bg-slate-50 lg:flex lg:mt-12 xl:mt-16">
        <div>
          <div className="flex">
            {" "}
            <ArrowBack />
            <Calendar />
          </div>
          <Filter />
        </div>
        <div className="w-full lg:mx-20">
          <SpecialDay />
        </div>
      </div>
      <div className="w-full">
        {" "}
        <EventsAccordion />
      </div>
    </div>
  );
}
