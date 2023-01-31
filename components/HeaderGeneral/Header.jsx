import Link from "next/link";
import MainMenu from "./MainMenu";
import HamburgerMenu from "./HamburgerMenu";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { globalPropertyAdapter } from "../../lib/globalPropertiesAdapter";

const Header = ({ title }) => {
  const { globalProperties } = useContext(GlobalContext);

  const logo = globalPropertyAdapter(globalProperties, "logo");

  return (
    <div className="bg-white relative metropolis_medium xl:container xl:mx-auto">
      <div className="bg-white relative flex justify-between metropolis_medium shadow-md h-28 lg:h-44"
        style={{ zIndex: "2" }}
      >
        {/* <!-- search bar/icon --> */}
        <div
          className="relative bg-white flex lg:flex-col items-center lg:items-baseline justify-start lg:justify-between lg:py-[11px] w-[34%] h-auto"
          style={{ zIndex: "4" }}
        >
          <SearchBar />
          {/* <!-- the brahma kumaris logo higher resolution --> */}
          <div className="hidden lg:block">
            <Link href="/">
              <a>
                {logo && (
                  <img
                    className="w-auto h-[3vw] lg:h-[6vw] xl:h-[4.5rem] lg:pl-8 xl:pl-16"
                    src={logo}
                    alt="BK Stacked "
                  />
                )}
              </a>
            </Link>
          </div>
        </div>

        <div
          className="fixed cursor-pointer left-2 top-5 md:left-3"
          style={{ zIndex: "1" }}
        >
          <div className="lg:hidden inline-block cursor-pointer p-[5px] bg-white rounded-full  border-[1px] border-red-600">
            <img
              className="h-[1.5em] md:h-[3.5vh]"
              src="/img/icons/Search.png"
              alt="search icon"
              title="search icon"
            />
          </div>
        </div>

        {/* <!-- center  --> */}
        <div className="w-full" style={{ zIndex: "3" }}>
          {/* <!-- our yagya logo --> */}
            <Link href="/">
             <div className="bg-white w-full relative cursor-pointer">
                <img className="object-fill w-auto mx-auto h-[7rem] lg:h-[11em]"
                  src="/img/ShivBaba.jpg"
                  alt="Our YagYa logo"
                  title="Our YagYa"
                />

                  {/* <!-- title and subtitle --> */}
                <div className="flex flex-wrap justify-center items-center absolute bottom-0 left-0 right-0 pb-[9px]">
                  <h1 className="text-gold1 font-extrabold uppercase text-2xl md:text-3xl lg:text-5xl text-center"
                    style={{ lineHeight: "1" }}>
                    {title}
                  </h1>
              </div>


          </div>
            </Link>
        </div>

        <HamburgerMenu />
      </div>
      <div className="hidden lg:block">
        {" "}
        <MainMenu />
      </div>
    </div>
  );
};

export default Header;
