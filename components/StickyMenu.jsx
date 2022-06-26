import { useState } from 'react'

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import useMenuScrollHooks from '../hooks/useMenuScrollHook'

export const mainMenuAdapter = (menuData) => {
  const arr = menuData[0].attributes['Entry'];

  return arr.map((md) => {
    return {
      link: md.link,
      title: md.title
    };
  });
};


const StickyMenu = () => {

  const [stickyPillMenu] = useMenuScrollHooks()

  const { t } = useTranslation();
  const { menuData } = useContext(GlobalContext);
  const menus = mainMenuAdapter(menuData);

  return (
    <div className={stickyPillMenu ? "fadeInTopMenu opacity-100	z-10 transition duration-150 ease-in-out sticky top-0 z-10 hidden lg:block" : "fadeOutTopMenu hidden"}>
      <div className="filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-center md:justify-around p-2 text-center mx-auto w-full">
        {/* stick menu */}
        <a
          className="px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap text-white"
          href="/"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </a>
        {menus.length > 0 &&
          menus.map((menu, i) => {
            return (
              <div key={i} className="flex justify-around items-center">
                <Link href="/">
                  <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-4xl whitespace-nowrap">
                    {menu.title}
                  </a>
                </Link>
                {i < menus.length - 1 && <a className="text-white text-sm lg:text-2xl xl:text-4xl ml-8 pt-[3px]">|</a>
                }

              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StickyMenu;
