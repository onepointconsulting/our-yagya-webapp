import React from "react";
import Link from "../../node_modules/next/link";
export default function MurliSearchBadges() {
  return (
    <>
      <div className="flex items-center py-2 my-4 md:my-6 metropolis_medium">
        <Link
          href="/example"
          className="inline-flex text-white text-center no-underline"
        >
          <h1 className="w-48 xss:w-36 md:w-28 lg:w-auto text-xl xss:text-2xl xl:text-6xl text-gold1 text-emoji filosofia_italic">
            results for
          </h1>
        </Link>

        <div className="overflow-x-scroll">
          <div className="inline-flex">
            <div className="bg-gold50 text-white py-2 px-2 mx-1 md:mx-3 flex justify-between items-center rounded-full m-1 w-28 md:w-36 lg:w-40 xl:w-48">
              {" "}
              <img
                src="/img/icons/Language.png"
                className="w-4 md:w-8"
                alt="img icons"
              />{" "}
              <h5 className="text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl">
                {" "}
                english{" "}
              </h5>{" "}
              <div
                onClick={() => {
                  history.go(-1);
                }}
                className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
              >
                X
              </div>
            </div>
            <div className="bg-gold50 text-white py-2 px-2 mx-1 md:mx-3 flex justify-between items-center rounded-full m-1 w-28 md:w-36 lg:w-40 xl:w-48">
              {" "}
              <img
                src="/img/svg/TopicIcon.svg"
                className="w-4 md:w-8"
                alt="img icons"
              />{" "}
              <h5 className="text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl">
                {" "}
                english{" "}
              </h5>{" "}
              <div
                onClick={() => {
                  history.go(-1);
                }}
                className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
              >
                X
              </div>
            </div>
            <div className="bg-gold50 text-white py-2 px-2 mx-1 md:mx-3 flex justify-between items-center rounded-full m-1 w-28 md:w-36 lg:w-40 xl:w-48">
              {" "}
              <img
                src="/img/svg/CalendarIcon.svg"
                className="w-4 md:w-8"
                alt="img icons"
              />{" "}
              <h5 className="text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl">
                {" "}
                english{" "}
              </h5>{" "}
              <div
                onClick={() => {
                  history.go(-1);
                }}
                className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
              >
                X
              </div>
            </div>
            <div className="bg-gold50 text-white py-2 px-2 mx-1 md:mx-3 flex justify-between items-center rounded-full m-1 w-28 md:w-36 lg:w-40 xl:w-48">
              {" "}
              <img
                src="/img/svg/SpeakerIcon.svg"
                className="w-4 md:w-8"
                alt="img icons"
              />{" "}
              <h5 className="text-sm text-gray-500 md:text-base lg:text-xl xl:text-2xl">
                {" "}
                english{" "}
              </h5>{" "}
              <div
                onClick={() => {
                  history.go(-1);
                }}
                className="pl-2 font-bold cursor-pointer lg:text-base xl:text-xl text-gold1 xl:pl-4"
              >
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
