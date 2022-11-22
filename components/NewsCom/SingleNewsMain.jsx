import React, { useContext } from "react";
import { singleNewstAdapter } from "../../lib/newsAdapter";
import Router from "next/router";
import SocialMediaIcons from "./SocialMediaIcons";
import { formateDate } from "../../lib/dateAdapter";
import { GlobalContext } from "../../pages/_app";

export default function SingleNewsMain({ data }) {
  const SingleNewsData = singleNewstAdapter(data);
  const { locale } = useContext(GlobalContext);

  return (
    <div>
      <div className="w-full">
        <div className="mx-4 md:mx-8">
          <div className="flex items-center justify-between pt-8 xl:mx-8">
            <div className="flex items-center">
              <div className="cursor-pointer">
                <img
                  onClick={() => Router.back()}
                  className="w-4 lg:w-8"
                  src="../img/ArrowSide.png"
                  alt=""
                />
              </div>

              <div className="ml-4">
                <div>
                  <h1 className="text-gold1 text-[1rem] xs:text-[23px] md:text-4xl xl:text-6xl filosofia_italic">
                    {SingleNewsData.sNewsTitle}
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative pt-1.5">
              <div
                className="pl-2 pr-2 cursor-pointer lg:m-auto md:pl-3 md:pr-3"
                id="share_btn"
              >
                <img
                  className="w-7 md:w-9 lg:w-9 xl:w-12"
                  src="../img/svg/Share.svg"
                  alt="share btn"
                />
              </div>
              <SocialMediaIcons />
            </div>
          </div>

          {/* <!-- date --> */}
          <div className="ml-8 lg:ml-12 xl:ml-20 flex items-center text-sm text-[#a9a9a9] md:text-base lg:text-xl xl:text-2xl">
            <div className="mr-2">posted</div>
            <div className="mx-2">
              {" "}
              {formateDate(SingleNewsData.sNewsTimestamp,locale,"cccc, dd LLLL yyyy")}
            </div>
          </div>

          <div className="w-full mx-auto xl:w-5/6">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0 rounded-md shadow-xl"
                src={SingleNewsData.sNewsVideo}
                allowFullScreen
              ></iframe>
            </div>
            <div className="pt-4 text-justify">
              <h3 className="text-sm text-gray-400 xl:leading-relaxed md:text-2xl lg:text-3xl">
                {SingleNewsData.sNewsContent}
              </h3>
            </div>

            <div>
              <div className="splide__track">
                <ul className="splide__list">
                  {/* <!-- second slide --> */}
                  <li className="bg-slate-50 splide__slide">
                    {/* <!-- bottom slider --> */}
                    <div className="mx-auto text-center">
                      <div>
                        <img
                          className="w-9/12 xs:w-[75%] mx-auto lg:w-full rounded-l-lg"
                          src={SingleNewsData.sNewsImageUrl}
                          alt={SingleNewsData.sNewsImageAlternativeText}
                          titl={SingleNewsData.sNewsImageName}
                        />
                      </div>
                      <h5 className="py-4 text-base leading-relaxed text-gold1 md:text-xl lg:text-2xl md:py-8 lg:py-12">
                        {SingleNewsData.sNewsImageAlternativeText}
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
