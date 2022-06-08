import Link from 'next/link'


const DefaultMenu = () => {
    return (
        <div>
            <div className="navIndex filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-end md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full" style={{ zIndex: '-6' }}>

                <Link href="/">


                    <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap">
                        Home                </a>
                </Link>

                <a className="text-gray-100">|</a>


                <Link href="/events">

                    <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap">
                        Events
                    </a>
                </Link>


                <a className="text-gray-100">|</a>


                <Link href="/classes">

                    <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap">
                        Classes & Talks
                    </a>

                </Link>

                <a className="text-gray-100">|</a>


                <Link href="/news">
                    <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap">
                        News                </a>

                </Link>


                <a className="text-gray-100">|</a>


                <Link href="/resources">

                    <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap">
                        Recourses
                    </a>
                </Link>


                <a className="text-gray-100">|</a>


                <Link href="/">

                    <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap">
                        Links and dirctory
                    </a>

                </Link>


            </div>


            <div className="hidden" style={{ zIndex: '-6' }}>

                <Link href="/">

                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">
                        Today&apos;s murli
                    </a>

                </Link>

                <a className="text-gray-100">|</a>


                <Link href="/">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">
                        Today&apos;s murli quiz
                    </a>

                </Link>


                <a className="text-gray-100">|</a>


                <Link href="/">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">
                        avyakt murlis
                    </a>

                </Link>


                <a className="text-gray-100">|</a>


                <Link href="/">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">
                        monthlt avyakt signals
                    </a>

                </Link>


                <a className="text-gray-100">|</a>


                <Link href="/">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">
                        murli search
                    </a>

                </Link>



            </div>
        </div>

    )
}

export default DefaultMenu