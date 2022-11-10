import React, { useContext } from 'react'
import { eventsAdapter } from "../../lib/eventsAdapter";
import EventBlock from "./EventBlock";
import { GlobalContext } from '../../pages/_app'
import { categoriesAdapter } from '../../lib/globalPropertiesAdapter'

const eventsData = [
  {
    title: "Experience Peace and Calm in Your Own Home",
    date: "7 December 2021 6:30-8:30pm EDT",
  },
  {
    title: "Experience Peace and Calm in Your Own Home",
    date: "7 December 2021 6:30-8:30pm EDT",
  },
  {
    title: "An apointment with Yourself",
    date: "7 December 2021 6:30-8:30pm EDT",
  },
];

export default function FeaturedEvents({ data }) {
  const eventsAd = eventsAdapter(data);
  console.log("events data", eventsAd)
  const { globalProperties, locale } = useContext(GlobalContext);

  const eventsCategories = categoriesAdapter(globalProperties, "eventsCategories", "::")

  return (
    <div>
      {/* <!-- home page background --> */}
      <div className="flex flex-col items-center w-full">
        {/* <!-- hero section with events lists --> */}


        <EventBlock data={data} title={eventsCategories[0]}/>

        {/* <!-- event 1 --> */}
        {eventsData.map((eve, i) => {
          return (
            <>
              <div className="justify-between w-full md:flex xl:items-center md:w-11/12 lg:w-10/12">
                <div className="w-full md:mr-4">
                  {/* <!-- section left --> */}
                  <div className="my-8 bg-gray-200">
                    <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                      {eve.title}
                    </div>
                    <div className="h-auto p-4 overflow-y-auto metropolis_medium">
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="pb-3">
                        <span className="text-sm text-gray-700 md:text-base">
                          {eve.date}
                        </span>
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {" "}
                        {eve.title}
                      </div>
                      <div className="pb-3">
                        <span className="text-sm text-gray-700 md:text-base">
                          {eve.date}
                        </span>
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="pb-3">
                        <span className="text-sm text-gray-700 md:text-base">
                          {eve.date}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 lg:py-8 cursor-poainter">
                        <a href="/events.html">
                          <img
                            className="w-8 xs:w-10"
                            src="./img/icons/ArrowDown.png"
                            alt={eve.title}
                            title={eve.title}
                          />
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="w-full lf:ml-4">
                  {/* <!-- section right --> */}
                  <div className="my-8 bg-gray-200">
                    <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                      {eve.title}
                    </div>
                    <div className="h-auto p-4 overflow-y-auto metropolis_medium">
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="pb-3">
                        <span className="text-sm text-gray-700 md:text-base">
                          {eve.date}
                        </span>
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {" "}
                        {eve.title}
                      </div>
                      <div className="pb-3">
                        <span className="text-sm text-gray-700 md:text-base">
                          {eve.date}
                        </span>
                      </div>
                      <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                      </div>
                      <div className="pb-3">
                        <span className="text-sm text-gray-700 md:text-base">
                          {eve.date}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 lg:py-8 cursor-poainter">
                        <a href="/events.html">
                          <img
                            className="w-8 xs:w-10"
                            src="./img/icons/ArrowDown.png"
                            alt={eve.title}
                            title={eve.title}
                          />
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
