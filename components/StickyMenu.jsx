import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const mainMenuAdapter = (menuData) => {
  return menuData.map((md) => {
    const entry = md["attributes"]["Entry"];
    console.log("title", entry);
    return {
      link: entry.link,
      title: entry.title,
    };
  });
};

const StickyMenu = () => {
  const { t } = useTranslation();
  // TODO: use useContext to to fetch the menu data and replace the top menu data
  const { menuData } = useContext(GlobalContext);
  const menus = mainMenuAdapter(menuData);
  console.log("menu menuData", menuData);

  return (
    <div className="stickyMenu sticky top-0 z-10 hidden lg:block">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </a>
        {menus.length > 0 &&
          menus.map((menu, i) => {
            console.log("getting menu", menu.Entry);
            return (
              <div key={i} className="flex justify-around items-center">
                <Link href="/">
                  <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-4xl whitespace-nowrap">
                    {t("Classes ")}
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
