import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import MainMenu from './MainMenu'
import HamburgerMenu from './HamburgerMenu'
import SearchBar from './SearchBar'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import {
    globalPropertyAdapter
} from '../../lib/globalPropertiesAdapter'
import PillMenu from './PillMenu'

const Header = ({ title }) => {
    const { globalProperties } = useContext(GlobalContext)
    const { t } = useTranslation()

    const logo = globalPropertyAdapter(globalProperties, 'logo')

    return (
        <div
            className="bg-white relative metropolis_medium xl:container xl:mx-auto">
            <div
                className="bg-white relative flex justify-between metropolis_medium shadow-md  md:mt-[-6px] h-20 xs:h-28 md::h-32 lg:h-auto"
                style={{ zIndex: '2' }}
            >
                {/* <!-- search bar/icon --> */}
                <div
                    className="relative bg-white flex lg:flex-col items-center lg:items-baseline justify-start lg:justify-between lg:py-[11px] w-[34%] h-auto"
                    style={{ zIndex: '4' }}
                >
                    <SearchBar/>
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
                    style={{ zIndex: '1' }}
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
                <div
                    className="relative w-full h-0 mx-auto text-center bg-white"  style={{ zIndex: '3' }}>
                    {/* <!-- our yagya logo --> */}
                    <Link href="/">
                        <a className='block bg-white'>
                            <img
                                className="object-contain w-auto mx-auto h-auto md:h-[7rem] lg:h-[11em]"
                                src="/img/ShivBaba.jpg"
                                alt="Our YagYa logo"
                                title='Our YagYa'
                            />
                        </a>
                    </Link>

                    {/* <!-- title and subtitle --> */}
                    <Link href="/">
                        <a className="absolute left-0 right-0 m-auto top-8 xs:top-12 lg:top-20 md:w-max">
                            {/*
                            
                            <h4 className=" text-gold1 text-[1rem] lg:text-[2rem] xl:text-[3vw] 2xl:text-[3em] uppercase">
                                 oUR YAGYA
                              </h4> 
                              
                             */}

                            <h1
                                className="text-gold1 font-extrabold uppercase text-[25px] xs:text-[2rem] md:text-[3rem]  lg:text-[4rem]"
                                style={{ lineHeight: '1' }}
                            >
                                {title}
                            </h1>
                        </a>
                    </Link>
                    <div
                        className="absolute bottom-0 left-0 right-0 top-auto block mb-3 lg:hidden">
                        <Link href="/">
                            <a>
                                {' '}
                                <img
                                    className="w-[77%] xs:w-[70%] md:w-[45%] lg:w-4 mx-auto"
                                    src="/img/icons/BK_Landscape.png"
                                    alt="BK Landscape"
                                />{' '}
                            </a>
                        </Link>
                    </div>
                </div>

                <HamburgerMenu/>
            </div>
<div className="hidden lg:block">            <MainMenu />
</div>
        </div>
    )
}

export default Header
