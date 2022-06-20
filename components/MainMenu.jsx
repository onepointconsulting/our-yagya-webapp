import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

export const mainMenuAdapter = (menuData) => {
  const arr = menuData[0].attributes['Entry']
  return arr.map((md) => {
    return {
      link: md.link,
      title: md.title
    };
  });
};

const MainMenu = () => {
  const { t } = useTranslation();
  // use useContext to to fetch the menu data and replace the top menu data
  const { menuData } = useContext(GlobalContext);
  const menus = mainMenuAdapter(menuData);

  return (
    <div className="hidden lg:block z-30 relative">
      <div className="filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-center md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full">
        {/* stick menu */}

        {menus.length > 0 &&
          menus.map((menu, i) => {
            console.log("getting menu", menu.Entry);
            return (
              <div key={i}>
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

export default MainMenu;
