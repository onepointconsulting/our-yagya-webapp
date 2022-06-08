const DefaultMenu = () => {
    return (
        <div>
            <div className="navIndex filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-end md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full" style={{ zIndex: '-6' }}>
                <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap" href="/">
                    Home                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap" href="/events.html">
                    Events
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap" href="/classes.html">
                    Classes & Talks
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap" href="/news.html">
                    News                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap" href="/resources.html">
                    Recourses               
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-3xl xl:text-4xl whitespace-nowrap" href="/resources.html">
                Links and dirctory                
                </a>

            </div>


            <div className="hidden" style={{ zIndex: '-6' }}>
                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/">
                    Today's murli
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/events.html">
                    Today's murli quiz
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/classes.html">
                    avyakt murlis
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/news.html">
                    monthlt avyakt signals
                </a>
                <a className="text-gray-100">|</a>

                <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/resources.html">
                    murli search
                </a>

            </div>
        </div>

    )
}

export default DefaultMenu