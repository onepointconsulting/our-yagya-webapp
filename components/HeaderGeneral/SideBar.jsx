import React, { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";

const SideBar = () => {
    const { handleClose } = useContext(ToggleContext);

  return (
    <div
      className="transition-all bg-gray50 w-48 md:w-64 -mt-4 absolute overflow-y-scroll lg:overflow-y-auto lg:static h-[71vh] lg:h-auto"
      style={{ transition: "0.3s" }}
    >
      <div className="px-4 h-auto overflow-y-auto">
        <div className="flex items-center justify-center w-full my-4 filosofia_regular">
          <span className="z-10 px-1 py-2 -mr-12 text-2xl text-red70">
            <img
              className="object-center w-8 pr-2 text-red70"
              src="/img/magnifying_glass.svg"
              alt=""
            />
          </span>

          <div className="w-full">
            <input
              type="search"
              className="w-full px-1 py-2 pl-12 text-base border placeholder-red70 font-Satisfy text-red70 focus:outline-none"
              placeholder="classNamees & talks by keyword"
              x-model="search"
            />
          </div>
        </div>

        <div className="py-4 flex justify-between">
          <h1 className="text-3xl text-start text-yagya_sidebar_filter_color lg:text-4xl filosofia_italic">
            filter
          </h1>
          <div>
            <svg
              onClick={handleClose}
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20.726"
              height="20.721"
              viewBox="0 0 20.726 20.721"
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-193.434 -126.021)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="18.339"
                  y2="18.519"
                  transform="translate(194.5 127.163)"
                  fill="none"
                  stroke="#787a7d"
                  stroke-width="3"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x1="18.6"
                  y2="18.6"
                  transform="translate(194.5 127.082)"
                  fill="none"
                  stroke="#787a7d"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          <div className="flex items-center lg:pb-2">
            <img
              className="object-center w-8 pr-2 text-red70"
              src="/img/svg/SpeakerIcon.svg"
              alt=""
            />
            <span className="text-lg text-red70 lg:text-2xl">speaker</span>
          </div>

          <ul className="lg:pb-4 mx-auto list-inside">
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> Mohini Didi (4378)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> Surya Bhai (102)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> Jayant Didi (245)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> Sudesh Didi (245)</a>
            </li>
            <div className="p-1 my-3 text-center text-white rounded-full bg-red70 w-20">
              more
            </div>
          </ul>

          <div className="flex items-center lg:pb-2">
            <img
              className="object-center w-8 pr-2 text-red70"
              src="/img/svg/TopicIcon.svg"
              alt=""
            />
            <span className="text-lg text-red70 lg:text-2xl">topic</span>
          </div>

          <ul className="lg:pb-4 mx-auto list-inside">
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> Silence (102)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> environment (546)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> signals (546)</a>
            </li>
            <div className="p-1 my-3 text-center text-white rounded-full bg-red70 w-20">
              more
            </div>

            <span className="mb-4 text-lg text-red70 lg:text-2xl">
              suitable for...
            </span>
            <li className="text-base text-gray-600 lg:text-xl list-circle">
              <a href=""> bks (546)</a>
            </li>
            <li className="text-base text-gray-600 lg:text-xl list-circle">
              <a href=""> public</a>
            </li>
          </ul>

          <div className="flex items-center lg:pb-2">
            <img
              className="object-center w-8 pr-2 text-red70"
              src="/img/svg/LanguageIcon.svg"
              alt=""
            />
            <span className="text-lg text-red70 lg:text-2xl">languages</span>
          </div>

          <ul className="lg:pb-4 mx-auto list-inside">
            <li className="text-xl text-gray-600 ed list-circle">
              <a href=""> english (102)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> french (546)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> spanish (546)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> portuguese (546)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> russian (546)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> chinese (546)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> chinese (546)</a>
            </li>

            <br />
          </ul>

          <div className="flex items-center lg:pb-2">
            <img
              className="object-center w-8 pr-2 text-red70"
              src="/img/svg/CalendarIcon.svg"
              alt=""
            />
            <span className="text-lg text-red70 lg:text-2xl">Date</span>
          </div>
          <ul className="lg:pb-4 mx-auto list-inside">
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> 2022 (52)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> 2021 (5,43356)</a>
            </li>
            <li className="text-base text-gray-600 md:text-lg lg:text-xl list-circle">
              <a href=""> 2020 (31,3545)</a>
            </li>
            <div className="p-1 my-3 text-center text-white rounded-full bg-red70 w-20">
              more
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
