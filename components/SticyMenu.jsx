const SticyMenu = () => {
    return (
        // <!-- gmenu with gray backgorund -->
        <div class="sticky top-0 z-10 hidden lg:block">
        <div class="filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-center md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full"
                style={{ zIndex: '-6' }}>
                <a class="px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap text-white" href="/">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/">
                    home
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/events.html">
                    events
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/classes.html">
                    classes & talks
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/news.html">
                    news
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/resources.html">
                    resources
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/links.html">
                    links directory
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/links.html">
                    more
                </a>
                <a class="text-gray-100 px-2 whitespace-nowrap" href="/links.html">
                    <i class="fal fa-chevron-right"></i>
                </a>
            </div>


            <div class="hidden"
                style={{ zIndex: '-6' }}>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/">
                    Today's murli
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/events.html">
                    Today's murli quiz
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/classes.html">
                    avyakt murlis
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/news.html">
                    monthlt avyakt signals
                </a>
                <a class="text-gray-100">|</a>

                <a class="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" href="/resources.html">
                    murli search
                </a>
            </div>
        </div>

    )
}

export default SticyMenu