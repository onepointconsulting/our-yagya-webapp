import { useTranslation } from "react-i18next";
import Link from "next/link";
import PillMenu from "./PillMenu";
import SidebarMenu from "./SidebarMenu.jsx";
import { useState } from "react";
import { useRouter } from "next/router";

const HamburgerMenu = () => {
  const { t } = useTranslation();
  const [sideBarMenuIsOpen, setSideBarMenuIsOpen] = useState(false);
  const router = useRouter();

  const sideBarMenu = () => {
    setSideBarMenuIsOpen(!sideBarMenuIsOpen);
  };

  return (
    <>
      {/* <!-- hamburger menu --> */}
      <div
        className="bg-[#ffffff] relative w-[34%] h-auto flex justify-end items-center"
        style={{ zIndex: "4" }}
      >
        {/* <!-- pille drop down --> */}
        <div id="floatingMenuItems" className="stickyButtons hide">
          <div>
            <div
              id="language"
              className="lang border-2 border-red-600 rounded-md hidden shadow-md absolute right-16 top-[16px] pr-4 rounded-tr-full rounded-br-full"
            >
              <select className="outline-none focused">
                <option>English</option>
                <option>Hindi</option>
                <option>Español</option>
              </select>
            </div>

            <div className="flex flex-col float-right ml-auto">
              <div className="p-2 px-2 m-1 text-red-600 border-2 border-red-600 rounded-full">
                <Link href="/">
                  <a href="#" id="o_language">
                    {" "}
                    <img
                      className="w-5 h-5"
                      src="../img/icons/Language.png"
                      alt=""
                    />{" "}
                  </a>
                </Link>
              </div>
              <div className="p-2 px-2 m-1 text-red-600 border-2 border-red-600 rounded-full">
                <Link href="/login.html">
                  <a>
                    {" "}
                    <img
                      className="w-5 h-5"
                      src="../img/icons/LoginRed.png"
                      alt=""
                    />{" "}
                  </a>
                </Link>
              </div>
              <div className="p-2 px-2 m-1 text-red-600 border-2 border-red-600 rounded-full">
                <Link href="/made4me.html">
                  <a>
                    {" "}
                    <img
                      className="w-5 h-5"
                      src="../img/icons/StarPointer.png"
                      alt=""
                    />{" "}
                  </a>
                </Link>
              </div>
              <div className="hidden p-2 px-2 m-1 text-red-600 border-2 border-red-600 rounded-full">
                <img
                  className="w-5 h-5"
                  src="../img/icons/HeartRed.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <PillMenu />

        {/* <!-- mobile hamburger icon --> */}
        <button onClick={sideBarMenu} className="absolute right-3">
          <div className="p-[4px] block lg:hidden">
            <div className="w-[16px] md:w-[24px] h-[3px] bg-red-500"></div>
            <div className="w-[16px] md:w-[24px] h-[3px] my-[3px] md:my-[5px] bg-red-500"></div>
            <div className="w-[16px] md:w-[24px] h-[3px] bg-red-500"></div>
          </div>
        </button>
      </div>

      {/* <!-- mobile hamburger icon fixed --> */}
      <div
        className="lg:hidden block fixed right-4 top-8"
        style={{ zIndex: "1" }}
      >
        <button
          onClick={sideBarMenu}
          className="p-[7.5px] md:p-[11.5px] rounded-full border-[1px] border-red-600"
        >
          <div className="w-[16px] h-[3.3px] bg-red-500"></div>
          <div className="w-[16px] h-[3.3px] my-[3.3px] bg-red-500"></div>
          <div className="w-[16px] h-[3.3px] bg-red-500"></div>
        </button>
      </div>
      <div className="relative">{sideBarMenuIsOpen && <SidebarMenu />}</div>
    </>
  );
};

export default HamburgerMenu;
