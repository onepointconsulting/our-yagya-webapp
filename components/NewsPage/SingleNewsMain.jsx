import React, { useContext, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import Router from "next/router";
import SocialMediaIcons from "./SocialMediaIcons";
import { formateDate } from "../../lib/dateAdapter";
import { GlobalContext } from "../../pages/_app";

const BackArrow = ({ singleNewsData }) => {
  const [socialOpen, setSocialOpen] = useState(false);
  const social = () => {
    setSocialOpen(!socialOpen);
  };

  return (
    <>
      {" "}
      <div className="mr-auto cursor-pointer flex items-center ">
        <div className="xl:w-14">
          <img
            onClick={() => Router.back()}
            className="w-4 lg:w-8"
            src="/img/ArrowSide.png"
            alt=""
          />
        </div>
        <div className="w-full mx-auto lg:px-20">
          <div className="my-4">
            <h1 className="text-gold1 text-left text-[1rem] xs:text-[29px] md:text-2xl xl:text-5xl filosofia_italic">
              {singleNewsData.sNewsTitle}
            </h1>
          </div>
        </div>
      </div>
      <div className="relative ml-auto xl:w-12">
        <SocialMediaIcons eventIndex={singleNewsData}  />
      </div>
    </>
  );
};

const NewsVideo = ({ singleNesData }) => {
  return (
    <>
      {!!singleNesData.sNewsVideo && (
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0 rounded-md shadow-xl"
            src={singleNesData.sNewsVideo}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

const NewsDate = ({ singleNewsData, locale, formateDate }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center py-2 md:py-4 text-sm xs:text-[16px] text-gray-400 md:text-base lg:text-xl xl:text-2xl">
      <div className="mr-2">{t("Posted")}</div>
      <div className="mx-2">
        {" "}
        {formateDate(
          singleNewsData.sNewsTimestamp,
          locale,
          "cccc, dd LLLL yyyy"
        )}
      </div>
    </div>
  );
};

const NewsImageSlider = ({ singleNewsData }) => {
  return (
    <>
      {!!singleNewsData.images && singleNewsData.images.length > 0 && (
        <div>
          {singleNewsData.images.map((img, i) => {
            return (
              <Splide
                hasTrack={false}
                aria-label="..."
                style={{ zIndex: "0", background: "transparent" }}
                options={{
                  type: "loop",
                  arrows: true,
                  speed: 1000,
                  swipeDistanceThreshold: 300,
                }}
                key={`news_slide_${i}`}
              >
                <div className="custom-wrapper">
                  <SplideTrack>
                    <SplideSlide>
                      <div
                        className="m-auto"
                        style={{ background: "transparent" }}
                      >
                        <div className="relative m-auto w-auto xs:w-[23rem] md:w-[30rem] xl:w-[42rem] 2xl:w-[70rem] h-[10rem] md:h-[17rem] xl:h-[23rem] 2xl:h-[39rem]">
                          <div className="inset-0 mx-auto mt-2 rounded-lg md:absolute lg:mt-0 ">
                            <img
                              className="w-full h-full rounded-lg"
                              src={img.url}
                              alt={img.name}
                              title={img.alternativeText}
                            />
                          </div>
                        </div>
                     <div className="my-12">   <h1 className="text-gold1 text-center text-base md:text-lg xl:text-3xl my-6">
                          {img.name}
                        </h1></div>
                      </div>
                    </SplideSlide>
                  </SplideTrack>
                  <div className="splide__arrows">
                    <button className="splide__arrow1 top-[39%] md:top-[36%] lg:top-[42%] splide__arrow--prev">
                      <img
                        className="w-14"
                        src="https://img.icons8.com/ios/512/back--v1.png"
                        alt=""
                      />
                    </button>
                    <button className="splide__arrow1 top-[39%] md:top-[36%] lg:top-[42%] splide__arrow--next">
                      <img
                        className="w-14"
                        src="https://img.icons8.com/ios-filled/512/forward.png"
                        alt=""
                      />
                    </button>
                  </div>{" "}
                </div>
              </Splide>
            );
          })}
        </div>
      )}
    </>
  );
};

const NewsContent = ({ singleNewsData, locale }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full md:px-2 xl:px-12">
        <BackArrow singleNewsData={singleNewsData} />
      </div>

      <div className="w-full mx-auto lg:px-14 xl:px-40">
        <NewsDate
          singleNewsData={singleNewsData}
          locale={locale}
          formateDate={formateDate}
        />

        <NewsVideo singleNesData={singleNewsData} />
        <div className="py-4 xl:py-8 text-justify">
          <h3 className="text-sm text-gray-400 xl:leading-relaxed md:text-base lg:text-xl xl:text-2xl">
            {singleNewsData.sNewsContent}
          </h3>
        </div>
      <NewsImageSlider singleNewsData={singleNewsData} />
      </div>
    </>
  );
};

export default function SingleNewsMain({ singleNewsData }) {
  const { t } = useTranslation();
  const { locale } = useContext(GlobalContext);

  return (
    <div className="w-full h-auto mb-60 md:mb-32 lg:mb-12">
      <div className="pt-4 mx-4 md:pt-8 lg:pt-12 md:mx-8">
        {!!singleNewsData ? (
          <NewsContent singleNewsData={singleNewsData} locale={locale} />
        ) : (
          <p>{t("Sorry, we could not find your news")}</p>
        )}
      </div>
    </div>
  );
}
