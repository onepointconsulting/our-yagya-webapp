import React from "react";
import Link from "../../node_modules/next/link";

const SidebarMenu = () => {
  return (
      <div
        className="fixed top-0 right-0 block w-48 h-screen overflow-y-auto transition duration-700 ease-in-out lg:hidden lg:top-20 bg-grayDark md:w-52 md:translate-x-0"
        style={{ zIndex: "-1" }}
      >
        <div className="flex flex-col p-2 filosofia_regular lg:p-4 mt-36">
          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">Home</Link>
          </div>

          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">Murli</Link>
          </div>
          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">Events</Link>
          </div>
          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">Classes & Talks</Link>
          </div>
          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">News</Link>
          </div>
          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">Links Directory</Link>
          </div>
          <div className="px-2 my-2 text-xl text-gray-100 md:text-2xl lg:text-1xl xl:text-3xl whitespace-nowrap">
            <Link href="#">center locator</Link>
          </div>
        </div>
      </div>
  );
};

export default SidebarMenu;
