import React from "react";

export default function MurliSearchBadges() {

  return (
    <div className="overflow-auto whitespace-nowrap flex items-center py-2 mb-8 metropolis_medium">
      <a href="#home" className="inline-flex text-white text-center no-underline mx-2">
        <h1 className="text-2xl xss:text-3xl xl:text-6xl text-gold1 text-emoji filosofia_italic">
          results for
        </h1>
      </a>
      <a href="#home" className="inline-flex text-white text-center no-underline mx-2">
        <div className="flex items-center justify-between w-28 md:w-36 lg:w-40 xl:w-48 bg-gold50 py-1 md:py-2 px-2 md:px-3 rounded-3xl">
          <div>
            <img className="h-5 md:h-8" src="../img/svg/TopicIcon.svg" alt="" />
          </div>

          <div className="px-1 overflow-hidden text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl xl:px-2 text-ellipsis whitespace-nowrap">
            love
          </div>

          <div
            onClick={() => {
              history.go(-1);
            }}
            className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
          >
            X
          </div>
        </div>
      </a>

      {/* <!-- 2 --> */}
      <a href="#home" className="inline-flex text-white text-center no-underline mx-2">
        <div className="flex items-center justify-between w-28 md:w-36 lg:w-40 xl:w-48 bg-gold50 py-1 md:py-2 px-2 md:px-3 rounded-3xl">
          <div>
            <img
              className="h-5 md:h-8"
              src="../img/icons/Language.png"
              alt=""
            />
          </div>

          <div className="px-1 overflow-hidden text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl xl:px-2 text-ellipsis whitespace-nowrap">
            english
          </div>

          <div
            onClick={() => {
              history.go(-1);
            }}
            className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
          >
            X
          </div>
        </div>
      </a>

      {/* <!-- 3 --> */}
      <a href="#home" className="inline-flex text-white text-center no-underline mx-2">
        <div className="flex items-center justify-between w-28 md:w-36 lg:w-40 xl:w-48 bg-gold50 py-1 md:py-2 px-2 md:px-3 rounded-3xl">
          <div>
            <img
              className="h-5 md:h-8"
              src="../img/svg/SpeakerIcon.svg"
              alt=""
            />
          </div>

          <div className="px-1 overflow-hidden text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl xl:px-2 text-ellipsis whitespace-nowrap">
            sakar
          </div>

          <div
            onClick={() => {
              history.go(-1);
            }}
            className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
          >
            X
          </div>
        </div>
      </a>

      {/* <!-- 3 --> */}
      <a href="#home" className="inline-flex text-white text-center no-underline mx-2">
        <div className="flex items-center justify-between w-28 md:w-36 lg:w-40 xl:w-48 bg-gold50 py-1 md:py-2 px-2 md:px-3 rounded-3xl">
          <div>
            <img
              className="h-5 md:h-8"
              src="../img/svg/CalendarIcon.svg"
              alt=""
            />
          </div>

          <div className="px-1 overflow-hidden text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl xl:px-2 text-ellipsis whitespace-nowrap">
            2021
          </div>

          <div
            onClick={() => {
              history.go(-1);
            }}
            className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
          >
            X
          </div>
        </div>
      </a>
    </div>
  );
}
