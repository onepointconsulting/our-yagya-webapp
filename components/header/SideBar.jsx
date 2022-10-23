import React from 'react';

const SideBar = () => {
    return (
        <div id="leftSideNav" className="fixed left-0 z-10 h-auto overflow-x-hidden transition-all top-40 xs:top-44 md:top-48 lg:top-auto lg:absolute bg-gray50" style={{transition: "0.3s"}}>
        <div className="p-4 h-[68vh] md:h-[69vh] overflow-y-auto">
            <div className="flex items-center justify-center w-full my-4 filosofia_regular">
                <span className="z-10 px-1 py-2 -mr-12 text-2xl text-red70">
                    <img className="object-center w-8 pr-2 text-red70" src="../img/magnifying_glass.svg" alt="" />
                </span>
    
                <div className="w-full">
                    <input type="search" className="w-full px-1 py-2 pl-12 text-base border placeholder-red70 font-Satisfy text-red70 focus:outline-none" placeholder="classes & talks by keyword" x-model="search" />
                </div>
            </div>
    
            <div className="py-4">
                <h1 className="text-3xl text-start text-yagya_sidebar_filter_color lg:text-4xl filosofia_italic">
                    filter
                </h1>
            </div>
    
            <div className="flex flex-col overflow-hidden">
                <div className="flex items-center pb-2">
                    <img className="object-center w-8 pr-2 text-red70" src="../img/svg/SpeakerIcon.svg" alt="" />
                    <span className="text-lg font-semibold text-red70 lg:text-2xl">speaker</span>
                </div>
    
                <ul className="pb-4 mx-auto list-inside">
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> Mohini Didi (4378)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> Surya Bhai (102)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> Jayant Didi (245)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> Sudesh Didi (245)</a></li>
                    <div className="p-1 my-3 text-center text-white rounded-full bg-red70 w-28">more</div>
                </ul>
    
                <div className="flex items-center pb-2">
                    <img className="object-center w-8 pr-2 text-red70" src="../img/svg/TopicIcon.svg" alt="" />
                    <span className="text-lg font-semibold text-red70 lg:text-2xl">topic</span>
                </div>
    
                <ul className="pb-4 mx-auto list-inside">
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> Silence (102)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> environment (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> signals (546)</a></li>
                    <div className="p-1 my-3 text-center text-white rounded-full bg-red70 w-28">more</div>
    
                    <span className="mb-4 text-lg font-semibold text-red70 lg:text-2xl">suitable for...</span>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> bks (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> public</a></li>
                </ul>
    
                <div className="flex items-center pb-2">
                    <img className="object-center w-8 pr-2 text-red70" src="../img/svg/LanguageIcon.svg" alt="" />
                    <span className="text-lg font-semibold text-red70 lg:text-2xl">languages</span>
                </div>
    
                <ul className="pb-4 mx-auto list-inside">
                    <li className="text-xl text-gray-600 ed list-circle"><a href=""> english (102)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> french (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> spanish (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> portuguese (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> russian (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> chinese (546)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> chinese (546)</a></li>
    
                    <br />
                </ul>
    
                <div className="flex items-center pb-2">
                    <img className="object-center w-8 pr-2 text-red70" src="../img/svg/CalendarIcon.svg" alt="" />
                    <span className="text-lg font-semibold text-red70 lg:text-2xl">Date</span>
                </div>
                <ul className="pb-4 mx-auto list-inside">
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> 2022 (52)</a></li>
                    <li className="text-xl text-gray-600 ed list-circle"><a href=""> 2021 (5,43356)</a></li>
                    <li className="text-base text-gray-600 lg:text-xl list-circle"><a href=""> 2020 (31,3545)</a></li>
                    <div className="p-1 my-3 text-center text-white rounded-full bg-red70 w-28">more</div>
                </ul>
            </div>
        </div>
    </div>
    
    );
}

export default SideBar;
