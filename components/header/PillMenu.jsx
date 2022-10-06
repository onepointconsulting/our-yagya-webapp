import useMenuScrollHooks from '../../hooks/useMenuScrollHook'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'

/**
 * buttons menu in higher screen
 * @returns {{}}
 * @constructor
 */
const PillMenu = () => {
    const [stickyPillMenu] = useMenuScrollHooks()
    const { pillMenu } = useContext(GlobalContext);

    // console.log('pillMenu', pillMenu)

    return (
        <div
            className="hidden metropolis_medium lg:flex flex-col items-center mr-4 mt-4">
            <div
                className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] duration-100 bg-slate-50 border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                <div
                    className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
                    <select
                        className="duration-100 outline-none cursor-pointer">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Español</option>
                    </select>
                </div>
                <img src="../img/icons/Language.png" alt=""
                     className="w-auto h-[1.5rem]"/>
            </div>
            <div
                className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] duration-100 bg-slate-50 border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                <Link href="/">
                    <a className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">Login</a>
                </Link>
                <img src="../img/icons/LoginRed.png" alt=""
                     className="w-auto h-[1.5rem]"/>
            </div>
            <div
                className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] leading-4 duration-100 bg-slate-50 border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                <Link href="/">
                    <a href="/made4me.html"
                       className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
                        Made for Me
                    </a>
                </Link>
                <img src="../img/icons/StarPointer.png" alt=""
                     className="w-auto h-[1.5rem]"/>
            </div>
            <div
                className="hidden w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] xl:px-[6px] m-[3px] duration-100 bg-slate-50 border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                <div
                    className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px] leading-none">Something
                    Special
                </div>
                <img src="../img/icons/HeartRed.png" alt=""/>
            </div>
        </div>
    )
}

export default PillMenu
