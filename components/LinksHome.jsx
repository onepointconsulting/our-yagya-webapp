const LinksHome = () => {
    return (
        <div class="lg:flex mt-3 mb-3 lg:px-6 py-8">
            <div
                class="w-auto md:w-11/12 lg:w-2/5 md:mb-4text-gray-900 text-xl bg-links_directory relative mr-4 ml-4 md:mr-auto md:ml-auto">
                <div class="bg-button-color capitalize p-2 md:p-4 text-Filosofia italic">
                    <h1 class="filosofia_italic text-white ml-auto text-2xl md:text-4xl lg:ml-5">Links directory</h1>
                </div>

                <div
                    class="links pb-12 mb-4 md:mb-auto md:pb-auto overflow-y-auto lg:overflow-y-none h-72 md:h-auto lg:h-4/6 metropolis_medium ml-3 mr-3 lg:mr-0 lg:ml-5 md:pt-2 lg:pt-4">
                    <div
                        class="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl mt-2 capitalize">
                        Murli Download
                    </div>
                    <a href="#"
                        class="md:pl-2 md:p-1 lg:p-2 -mt-2 text-date-color text-lg md:text-xl lg:text-1xl xl:text-3xl capitalize">(Login
                        Required)</a>
                    <div
                        class="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl capitalize">
                        Madhuban Murli
                    </div>
                    <div
                        class="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl capitalize">
                        Avyakt BapDada online
                    </div>

                    <div
                        class="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl capitalize">
                        BKUN
                    </div>
                    <div
                        class="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl capitalize">
                        green team
                    </div>
                    <div class="md:pl-2 md:p-1 lg:p-2 text-title-conf-color text-lg md:text-xl lg:text-1xl xl:text-3xl">etc...
                    </div>
                    <div class="absolute bottom-4 right-0 left-0">
                        <h1 class="cursor-poainter text-5xl mt-4 flex justify-center text-gray-400 text-center">
                            <a href="/links.html">
                                <img src="./img/icons/ArrowDown.png" alt="" />

                            </a>
                        </h1>
                    </div>
                </div>
            </div>

            {/* <!-- video preview --> */}
            <div class="bg-video-pre-color mb-8 md:mb-auto md:w-11/12 lg:ml-2 mr-4 ml-4 md:mr-auto md:ml-auto">
                {/* <!--  featured title --> */}
                <div class="bg-button-color capitalize p-2 md:p-4 text-Filosofia italic">
                    <h1 class="filosofia_italic text-white ml-auto text-2xl md:text-4xl">
                        featured videos
                    </h1>
                </div>

                {/* <!-- Videw section --> */}
                <div class="metropolis_medium bg-video-pre-color ml-3 mr-3 lg:mr-0 lg:ml-0 mt-2">
                    <div class="w-auto max-w-auto p-auto md:p-4 xl:p-16 mx-auto">
                        <div class="relative w-full pb-[56.25%]">
                            <iframe class="absolute top-0 left-0 w-full h-full border-0 rounded-sm shadow-xl" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>

                        </div>
                        <div class="flex justify-between items-center pb-6 pt-2 text-xs sm:text-sm md:text-xl">
                            <div>
                                <div class="text-gray-500 font-semibold"><strong>Siddhi Swaroop: Conclusion &
                                    Experiences</strong></div>
                                <div class="text-gray-500"><span>Speaker: Mohini Didi</span></div>
                            </div>
                            <div class="text-right text-gray-500">
                                <div>October 31, 201</div>
                                <div>Duration: 1:03:45</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LinksHome