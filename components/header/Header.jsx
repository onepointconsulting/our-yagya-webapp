import { useTranslation } from "react-i18next";
import Link from "next/link";
import MainMenu from "./MainMenu";
import PillMenu from "./PillMenu";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    const { t } = useTranslation();
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
                <div className="relative w-full h-auto mx-auto text-center bg-[#ffffff]">
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

                <HamburgerMenu />
            </div>
            <MainMenu />
        </div>
    );
};

export default Header;
