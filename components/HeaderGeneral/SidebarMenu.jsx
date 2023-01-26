import React from "react";

const SidebarMenu = () => {
  return (
    <div>
        <div
          className="block lg:hidden fixed top-0 lg:top-20 right-0 w-48 h-screen overflow-y-auto transition duration-700 ease-in-out bg-grayDark md:w-52 md:translate-x-0"
          style={{ zIndex: "-1" }}
        >
          <div className="flex flex-col p-2 filosofia_regular lg:p-4 mt-24">
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/"
            >
              Home
            </a>
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/murli.html"
            >
              Murli
            </a>
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/events.html"
            >
              Events
            </a>
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/classes.html"
            >
              Classes & Talks
            </a>
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/news.html"
            >
              News
            </a>
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/resources.html"
            >
              Links Directory
            </a>
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/links.html"
            >
              center locator
            </a>
          </div>
          <div className="p-2 text-left bg-red70">
            <h1 className="text-2xl md:text-[1.75rem] text-gray-100 filosofia_italic">
              Sustenace
            </h1>
          </div>

          <div className="flex flex-col p-2 bg-gold1 filosofia_regular">
            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/blessings.html"
            >
              Gyan
            </a>

            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/classes.html"
            >
              Yoga
            </a>

            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/"
            >
              Dharna
            </a>

            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/"
            >
              Seva
            </a>

            <a
              className="px-2 my-2 text-xl md:text-2xl text-gray-100 lg:text-1xl xl:text-3xl whitespace-nowrap"
              href="/events.html"
            >
              Our Yagya
            </a>
          </div>
        </div>
    </div>
  );
};

export default SidebarMenu;
