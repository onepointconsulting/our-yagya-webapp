import PillMenu from './PillMenu'
import RightPillButtons from './RightPillButtons'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Hamburger from './Hamburger'
import SearchBar from './SearchBar'
import MainMenu from '../MainMenu'

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="metropolis_medium min-h-full xl:container xl:mx-auto bg-white relative z-30">
      {/* <!-- sticky buttons on top right --> */}
      <PillMenu />
      {/* <!-- sticky search menu on top left--> */}
      <div
        className="fixed -top-12 lg:absolute lg:h-full lg:top-0 left-0"
        style={{ zIndex: "1" }}
      >
        <div className="sticky top-4 z-10">
          <Link href="/">
            <a className="lg:hidden inline-block float-right text-yagya-red-color ml-[3px] mt-1 p-[6px] bg-white rounded-full border-2 border-yagya-red">
              <img
                className="h-7 xs:h-8 md:h-7"
                src="../img/magnifying_glass.svg"
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>

      {/* <!-- sticky hamburger menu --> */}
      <div
        className="fixed -top-12 lg:absolute lg:h-full lg:top-0  right-0"
        style={{ zIndex: "2" }}
      >
        <div className="sticky top-4 lg:top-0 z-10">
          <Link href="/">
            <a className="lg:hidden inline-block float-right text-yagya-red-color mr-[3px] mt-1 p-[6px] bg-white rounded-full border-2 border-yagya-red">
              <button
                id="mobile_menu1"
                className="relative w-7 h-7 outline-none"
              >
                <div
                  role="hidden"
                  id="line"
                  className="inset-0 w-4 h-0.5 m-auto rounded-full bg-yagya-red transition duration-300"
                ></div>
                <div
                  role="hidden"
                  id="line2"
                  className="inset-0 w-4 h-0.5 mt-1 m-auto rounded-full bg-yagya-red transition duration-300"
                ></div>
                <div
                  role="hidden"
                  id="line2"
                  className="inset-0 w-4 h-0.5 mt-1 m-auto rounded-full bg-yagya-red transition duration-300"
                ></div>
              </button>
            </a>
          </Link>
        </div>
      </div>

      {/* <!-- Header --> */}
      <div className="fadeInTop flex-wrap lg:flex flex-row justify-center lg:justify-between items-end w-full pb-2 md:pb-4 lg:pb-1 relative bg-white shadow-md z-30">
        {/* <!-- Logo and Search icon on the left side  --> */}
        <SearchBar />

        {/* <!-- center logo and title --> */}
        <div className="mx-auto self-baseline basis-1/2 text-center flex flex-col items-center">
          <div>
            <img
              className="mt-1 sm:mt-auto h-8 xs:h-10 sm:h-8 md:h-14 mx-auto lg:hidden absolute top-0 xs:top-2 md:top-4 left-0 right-0
                            "
              src="../img/icons/BK_Landscape.png"
              alt=""
            />
          </div>
          <div>
            <Link href="/">
              <a>
                {" "}
                <img
                  className="h-16 xs:h-20 sm:h-28 lg:h-44 w-auto object-contain mx-auto rounded-full -mt-4"
                  src="./img/logo_big.png"
                  alt="Our Yagya logo"
                />
              </a>
            </Link>
          </div>

          <Link href="/">
            <a className="-mt-8 md:-mt-12 lg:-mt-8 xl:-mt-12">
              <h1 className="text-3xl text-yagya-red-color hidden">
                {t("Our Yagya")}
              </h1>
              <h1 className="metropolis_medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl text-gold1 font-bold uppercase">
                {t("Our Yagya")}
              </h1>
            </a>
          </Link>
        </div>

        <Hamburger />

        {/* <!-- Buttons on the right side --> */}
        <RightPillButtons />
      </div>
      <MainMenu />
    </div>
  );
};

export default Header;
