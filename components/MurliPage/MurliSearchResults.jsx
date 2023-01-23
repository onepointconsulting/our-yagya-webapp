import React, { createContext, useState } from "react";
import { ToggleContext, useToggle } from "../../context/ToggleContext";
import Toggle from "../ClassesPage/Toggle";
import SideBar from "../HeaderGeneral/SideBar";
import MurliSearchBadges from "./MurliSearchBadges";

// context is for the sidebar component

export default function MurliSearchResults() {
    const { isOpen, handleOpen, handleClose } = useToggle();

  const searchData = [
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
    {
      originalDate: "Unknown",
      published: "Tue Mar 17 2021",
      description:
        " amet adipisicing elit. A sequi dolores rerum laborum perspiciatis obcaecati, est repellendus culpa facere laudantium.",
    },
  ];

  return (
    <div className="flex w-full">
      <ToggleContext.Provider value={{ isOpen, handleOpen, handleClose }}>
        <div className="w-auto h-full mt-4 top-4 sticky z-10">
          <div className="z-50 sticky top-0 h-full w-max">
            {isOpen ? (
              <div>
                <SideBar />
              </div>
            ) : (
              <Toggle />
            )}
          </div>
        </div>
      </ToggleContext.Provider>
      <div
        id="murliSearcPage"
        className="relative my-4"
        style={{ minHeight: " calc(100vh - 100px)" }}
      >
        {/* <!-- the speakers list section --> */}
        <div className="w-full h-full overflow-x-scroll 2xl:overflow-x-auto mr-4">
          <MurliSearchBadges />

          <div className="mt-4 fadeInLeft md:-mt-4 lg:mt-0 lg:mr-9 xl:mr-auto xl:ml-auto lg:ml-1 md:mb-12 lg:mb-80">
            {searchData.map((item, index) => (
              <a href="/details.html" className="my-2">
                <div
                  className={
                    index % 2 === 0
                      ? "flex-row justify-between md:flex md:mr-3 bg-gray-200"
                      : "flex-row justify-between md:flex md:mr-3 bg-white"
                  }
                >
                  <div className="flex items-center w-auto">
                    <img
                      className="float-left object-cover w-12 h-12 mx-2 my-2 rounded-full lg:my-4 md:mx-4 xs:h-16  lg:h-20 xs:w-16 lg:w-20"
                      src="https://i.ytimg.com/vi/jbd0_pav3EY/maxresdefault.jpg"
                      alt=""
                    />
                    <div>
                      <div className="flex flex-col text-redfull text-[12px] xs:text-ms md:text-[22px] lg:text-xl xl:text-2xl my-0  md:my-[3px] 2xl:my-[6px]">
                        <div>
                          Original date: <span>{item.originalDate} </span>
                        </div>
                        <div>
                          Published date: <span>{item.published}</span>
                        </div>
                      </div>
                      <div className="description text-sm md:text-sm lg:text-[1rem] pr-2 xl:text-xl text-gray-400 text-left w-auto h-fit p-0 xl:p-2">
                        {item.description}{" "}
                        <span className="py-1 px-2 bg-yellow-300">love</span>{" "}
                        facere laudantium.
                      </div>
                    </div>
                  </div>
                  {/* <!-- flex right --> */}
                  <div className="flex items-center">
                    <div className="pl-2 pr-2 lg:m-auto md:pl-3 md:pr-3 flex flex-col items-center">
                      <img
                        className="w-8 md:w-12 xl:w-16"
                        src="../img/icons/eye.png"
                        alt=""
                      />
                      <p className="text-sm lg:text-base text-gray-300">Read</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 mt-20">
          <h1 className="flex justify-center text-center cursor-poainter">
            <a href="/events.html">
              <img className="w-8" src="/img/icons/ArrowDown.png" alt="" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
