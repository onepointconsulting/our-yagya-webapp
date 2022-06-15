import Link from 'next/link'

const SearchIcon = () => {
    return (
        <div className="flex flex-col w-64 mb-4">
        <div id="searchBar" className="absolute md:left-8 left-3 lg:left-2 top-6 md:top-8 cursor-pointer">
            <img className="h-5 xs:h-8 md:h-auto" src="../img/magnifying_glass.svg" alt="" />
        </div>
        <div className=" hidden lg:block">
            <Link href="/">
                <a><img className="w-auto lg:h-20 lg:pl-16 lg:mb-[5%] xl:mb-[4%] " src="./img/BK_Stacked_SM.png"
                    alt="" /></a>
            </Link>
        </div>
    </div>
    )
}

export default SearchIcon