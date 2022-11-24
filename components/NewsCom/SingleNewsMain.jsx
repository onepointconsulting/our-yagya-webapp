import React, { useContext } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { singleNewsAdapter } from "../../lib/newsAdapter";
import Router from "next/router";
import SocialMediaIcons from "./SocialMediaIcons";
import { formateDate } from "../../lib/dateAdapter";
import { GlobalContext } from "../../pages/_app";

const BackArrow = () => {
  return (
    <>
      {" "}
      <div className="mr-auto cursor-pointer">
        <img
          onClick={() => Router.back()}
          className="w-4 lg:w-8"
          src="/img/ArrowSide.png"
          alt=""
        />
      </div>
      <div className="relative ml-auto">
        <div className="cursor-pointer">
          <img
            className="w-7 md:w-9 lg:w-9 xl:w-12"
            src="/img/svg/Share.svg"
            alt="share btn"
          />
        </div>

        <SocialMediaIcons />
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
        <div className="w-auto mx-auto lg:w-9/12">
          <Splide
            className="visible splide"
            style={{ zIndex: "0" }}
            aria-label="My slider"
            options={{
              type: "loop",
              arrows: true,
              speed: 1000,
              swipeDistanceThreshold: 300,
            }}
          >
            {singleNewsData.images.map((img, i) => {
              return (
                <SplideSlide
                  className="splide__slide"
                  style={{ background: "transparent" }}
                  key={`news_slide_${i}`}
                >
                  <div className="m-auto" style={{ background: "transparent" }}>
                    <div className="relative w-[17rem] md:w-[30rem] xl:w-[42rem] 2xl:w-[59rem] h-[10rem] md:h-[17rem] xl:h-[23rem] 2xl:h-[32rem]">
                      <div className="inset-0 mx-auto mt-2 rounded-lg md:absolute lg:mt-0 ">
                        <img
                          className="w-full h-full rounded-lg"
                          src={img.url}
                          alt={img.name}
                          title={img.alternativeText}
                        />
                      </div>
                    </div>
                         <h1 className="text-gold1 text-center text-[1rem] xs:text-[29px] md:text-2xl xl:text-5xl">
            {img.name}
          </h1>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      )}
    </>
  );
};

const NewsContent = ({ singleNewsData, locale }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full md:px-2 xl:px-12">
        <BackArrow />
      </div>

      <div className="w-full mx-auto lg:px-14 xl:px-40">
        <div className="my-4 filosofia_italic">
          <h1 className="text-gold1 text-left text-[1rem] xs:text-[29px] md:text-2xl xl:text-5xl">
            {singleNewsData.sNewsTitle}
          </h1>
        </div>

        <NewsDate
          singleNewsData={singleNewsData}
          locale={locale}
          formateDate={formateDate}
        />

        <NewsVideo singleNesData={singleNewsData} />
        <div className="pt-4 text-justify">
          <h3 className="text-sm text-gray-400 xl:leading-relaxed md:text-base lg:text-xl xl:text-3xl">
            {singleNewsData.sNewsContent}
          </h3>
        </div>
      </div>
      <NewsImageSlider singleNewsData={singleNewsData} />
    </>
  );
};

export default function SingleNewsMain({ data }) {
  const { t } = useTranslation();
  const singleNewsData = singleNewsAdapter(data);
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
