import PillMenu from "./PillMenu";
import RightPillButtons from "./RightPillButtons";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Hamburger from "./Hamburger";
import SearchBar from "./SearchBar";
import MainMenu from "../MainMenu";

const Header = () => {
    const { t } = useTranslation();

    <PillMenu />;
    return (
        <div className="bg-[#ffffff] relative metropolis_medium xl:container xl:mx-auto">
            <div className="bg-[#ffffff] relative flex justify-between metropolis_medium shadow-md  md:mt-[-6px] h-24 xs:h-32 md::h-32 lg:h-auto" style={{ zIndex: "2" }}>
                {/* <!-- search bar/icon --> */}
                <div className="relative bg-[#ffffff] flex lg:flex-col items-center lg:items-baseline justify-start lg:justify-between lg:py-[11px] w-[34%] h-auto" style={{ zIndex: "4" }}>
                    <div id="searchBar" className="ml-2 cursor-pointer md:ml-4 lg:pt-5">
                        <img className="h-[1.5em] md:h-[3.5vh] lg:h-[2rem]" src="../img/icons/Search.png" alt="magnifying glass" />
                    </div>

                    {/* <!-- the brahma kumaris logo higher resolution --> */}
                    <div className="hidden lg:block">
                        <Link href="/">
                            <a>
                                <img className="w-auto h-[3vw] lg:h-[6vw] xl:h-[4.5rem] lg:pl-8 xl:pl-16" src="./img/BK_Stacked_SM.png" alt="BK Stacked " />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="fixed cursor-pointer left-2 top-5 md:left-3" style={{ zIndex: "1" }}>
                    <div id="searchBarMobile" className="lg:hidden inline-block cursor-pointer p-[12px] bg-[#ffffff] rounded-full border-[1px] border-red-600" href="#">
                        <img className="h-[1.5em] md:h-[3.5vh]" src="../img/icons/Search.png" alt="" />
                    </div>
                </div>

                {/* <!-- center  --> */}
                <div className="relative w-full h-auto mx-auto text-center">
                    {/* <!-- our yagya logo --> */}
                    <Link href="/">
                        <a>
                            <img className="object-contain w-auto mx-auto -mt-4 xs:-mt-0 rounded-full h-[7rem] lg:h-[11em]" src="./img/ShivBaba.jpg" alt="Our Yagya logo" />
                        </a>
                    </Link>

                    {/* <!-- title and subtitle --> */}
                    <Link href="/">
                        <a className="absolute left-0 right-0 top-[1.5rem] md:top-8 lg:top-20">
                            {/*
                            
                            <h4 className=" text-gold1 text-[1rem] lg:text-[2rem] xl:text-[3vw] 2xl:text-[3em] uppercase">
                                 oUR YAGYA
                              </h4> 
                              
                             */}

                            <h1 className="@@TitleStyle text-gold1 font-extrabold uppercase text-[31px] xs:text-[2.4rem] md:text-[3rem]  lg:text-[5.5em]" style={{ lineHeight: "1" }}>
                                OURYAGYA
                            </h1>
                        </a>
                    </Link>
                    <div className="block lg:hidden  absolute mb-3 top-auto left-0 right-0 bottom-0">
                        <Link href="/">
                            <a>
                                {" "}
                                <img className="w-[77%] xs:w-[70%] md:w-[45%] lg:w-4 mx-auto" src="../img/icons/BK_Landscape.png" alt="BK Landscape" />{" "}
                            </a>
                        </Link>
                    </div>
                </div>

                {/* <!-- hamburger menu --> */}
                <div className="bg-[#ffffff] relative w-[34%] h-auto flex justify-end items-center" style={{ zIndex: "4" }}>
                    {/* <!-- pille drop down --> */}
                    <div id="floatingMenuItems" className="stickyButtons hide">
                        <div>
                            <div id="language" className="lang bg-[#ffffff] border-2 border-red-600 rounded-md hidden shadow-md absolute right-16 top-[16px] pr-4 rounded-tr-full rounded-br-full">
                                <select className="outline-none focused">
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Español</option>
                                </select>
                            </div>

                            <div className="flex flex-col float-right ml-auto">
                                <div className="p-2 px-2 m-1 text-red-600 bg-[#ffffff] border-2 border-red-600 rounded-full">
                                    <Link href="/">
                                        <a href="#" id="o_language">
                                            {" "}
                                            <img className="w-5 h-5" src="../img/icons/Language.png" alt="" />{" "}
                                        </a>
                                    </Link>
                                </div>
                                <div className="p-2 px-2 m-1 text-red-600 bg-[#ffffff] border-2 border-red-600 rounded-full">
                                    <Link href="/login.html">
                                        <a>
                                            {" "}
                                            <img className="w-5 h-5" src="../img/icons/LoginRed.png" alt="" />{" "}
                                        </a>
                                    </Link>
                                </div>
                                <div className="p-2 px-2 m-1 text-red-600 bg-[#ffffff] border-2 border-red-600 rounded-full">
                                    <Link href="/made4me.html">
                                        <a>
                                            {" "}
                                            <img className="w-5 h-5" src="../img/icons/StarPointer.png" alt="" />{" "}
                                        </a>
                                    </Link>
                                </div>
                                <div className="hidden p-2 px-2 m-1 text-red-600 bg-[#ffffff] border-2 border-red-600 rounded-full">
                                    <img className="w-5 h-5" src="../img/icons/HeartRed.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- buttons menu in higher screen --> */}
                    <div className="hidden metropolis_medium lg:flex flex-col items-center mr-4 mt-4">
                        <div className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] duration-100 bg-[#ffffff] border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                            <div className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
                                <select className="duration-100 outline-none cursor-pointer">
                                    <option>English </option>
                                    <option>Hindi </option>
                                    <option>Español</option>
                                </select>
                            </div>
                            <img src="../img/icons/Language.png" alt="" className="w-auto h-[1.5rem]" />
                        </div>
                        <div className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] duration-100 bg-[#ffffff] border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                            <Link href="/">
                                <a className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">Login</a>
                            </Link>
                            <img src="../img/icons/LoginRed.png" alt="" className="w-auto h-[1.5rem]" />
                        </div>
                        <div className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] leading-4 duration-100 bg-[#ffffff] border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                            <Link href="/">
                                <a href="/made4me.html" className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
                                    Made for Me
                                </a>
                            </Link>
                            <img src="../img/icons/StarPointer.png" alt="" className="w-auto h-[1.5rem]" />
                        </div>
                        <div className="hidden w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] xl:px-[6px] m-[3px] duration-100 bg-[#ffffff] border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                            <div className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px] leading-none">Something Special</div>
                            <img src="../img/icons/HeartRed.png" alt="" />
                        </div>
                    </div>

                    {/* <!-- mobile hamburger icon --> */}
                    <div className="absolute right-3">
                        <button id="mobile_menu" className="p-[4px] bg-[#ffffff] block lg:hidden">
                            <div className="w-[16px] md:w-[24px] h-[3px] bg-red-500"></div>
                            <div className="w-[16px] md:w-[24px] h-[3px] my-[3px] md:my-[5px] bg-red-500"></div>
                            <div className="w-[16px] md:w-[24px] h-[3px] bg-red-500"></div>
                        </button>
                    </div>
                </div>

                {/* <!-- mobile hamburger icon fixed --> */}
                <div className="lg:hidden block fixed right-4 top-8" style={{ zIndex: "1" }}>
                    <button id="mobile_menu1" className="p-[7.5px] md:p-[11.5px] rounded-full border-[1px] bg-[#ffffff] border-red-600">
                        <div className="w-[16px] h-[3.3px] bg-red-500"></div>
                        <div className="w-[16px] h-[3.3px] my-[3.3px] bg-red-500"></div>
                        <div className="w-[16px] h-[3.3px] bg-red-500"></div>
                    </button>
                </div>
            </div>
            <MainMenu />
        </div>
    );
};

export default Header;
