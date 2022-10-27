import React from "react";
import { imageAdapter } from '../../lib/imageAdapter'
import { useTranslation } from "react-i18next";

const newsAdapter = (data) => {
    return []
}

export default function HomeMain ({data}) {
    const { t } = useTranslation();

    const bgImage = imageAdapter(data);

  return (
    // <!-- home page background -->
    <div className="flex flex-col items-center w-full">
        <div className="justify-center w-full h-auto mb-auto bg-opacity-75 lg:flex imageBack" style={{background: `url(${bgImage}) center center / cover no-repeat`}}>
            <div className="grid grid-cols-1 gap-4 pt-4 pb-4 mx-4 lg:grid-cols-3 lg:pt-72">
                <div className="relative w-full h-full pb-12 mb-2 bg-gray-200 bg-opacity-95 lg:w-auto xl:pb-16 lg:mb-0">
                 <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">    {t("Events")} </div>
                 <div className="p-4 overflow-y-auto metropolis_medium h-80 ">
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Online GlobalSilence Retreat</div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Silence Retreat</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">19-20 November</span>
                     </div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Avyakt BapDada</div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">milan</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">15 November</span>
                     </div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Dewali Festival</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">4 November</span>
                     </div>
                 </div>
                 <div className="absolute left-0 right-0 bottom-8">
                     <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                        <a href="/events.html">
                            <img src="./img/icons/ArrowDown.png" alt="" />
                        </a>
                     </h1>
                 </div>
             </div>
       
             <div className="relative w-full h-full pb-12 mb-2 bg-gray-200 fadeInTop bg-opacity-95 lg:w-auto xl:pb-16 lg:mb-0"
                >
                 <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl"> {t("Latest classes")}</div>
                 <div className="p-4 overflow-y-auto metropolis_medium h-80 ">
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Online GlobalSilence Retreat</div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Silence Retreat</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">19-20 November</span>
                     </div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Avyakt BapDada</div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">milan</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">15 November</span>
                     </div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Dewali Festival</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">4 November</span>
                     </div>
                 </div>
                 <div className="absolute left-0 right-0 bottom-8">
                     <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                        <a href="/classes.html">
                            <img src="./img/icons/ArrowDown.png" alt="" />
                        </a>
                     </h1>
                 </div>
             </div>
       
             <div className="relative w-full h-full pb-12 mb-2 bg-gray-200 metropolis_medium bg-opacity-95 lg:w-auto xl:pb-16 lg:mb-0"
                >
                 <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">{t("News")}</div>
                 <div className="p-4 overflow-y-auto metropolis_medium h-80 ">
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Online GlobalSilence Retreat</div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Silence Retreat</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">19-20 November</span>
                     </div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Avyakt BapDada</div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">milan</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">15 November</span>
                     </div>
                     <div className="leading-5 text-[1.2rem] text-redfull md:text-2xl">Dewali Festival</div>
                     <div className="pb-3">
                         <span className="text-[14px] text-gray-700 md:text-base">4 November</span>
                     </div>
                 </div>
                 <div className="absolute left-0 right-0 bottom-8">
                     <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                        <a href="/news.html">
                            <img src="./img/icons/ArrowDown.png" alt="" />
                        </a>
                     </h1>
                 </div>
             </div>
    
            </div>
            {/* <!-- Resources --> */}
        </div>
    </div>
  );
}
