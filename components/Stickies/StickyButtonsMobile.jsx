import React from "react";

const StickyButtonMobile = () => {


    return (
        <div className="lg:hidden" style={{ zIndex: "1" }}>
            <div className="flex items-center justify-center ml-auto mr-auto rounded-full w-fit" style={{ backgroundColor: "rgb(233 81 61)" }}>
                <div id="lang_pop_up_btn" className="p-2 px-2 m-1 bg-white border-2 rounded-full text-red70 border-red70">
                    <img className=" h-auto md:h-8 w-[27px] md:w-8" src="/img/icons/Language.png" alt="" />
                </div>

                <div className="p-2 px-2 m-1 bg-white border-2 rounded-full text-red70 border-red70">
                    <a href="/login.html"> <img className=" h-auto md:h-8 w-[27px] md:w-8" src="/img/icons/Login_SM.png" alt="" /> </a>
                </div>
                <div className="p-2 px-2 m-1 bg-white border-2 rounded-full text-red70 border-red70">
                    <a href="/made4me.html"> <img className=" h-auto md:h-8 w-[27px] md:w-8" src="/img/icons/StarPointer.png" alt="" /> </a>
                </div>
                <div className="hidden p-2 px-2 m-1 bg-white border-2 rounded-full text-red70 border-red70">
                    <img className=" h-auto md:h-8 w-[27px] md:w-8" src="/img/icons/HeartRed.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default StickyButtonMobile;
