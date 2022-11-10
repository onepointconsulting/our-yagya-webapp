import React, { useContext, useState } from "react";
import { formateDate } from "../../lib/dateAdapter";
import { imageAdapter } from "../../lib/imageAdapter";
import { newsAdapter } from "../../lib/newsAdapter";
import { GlobalContext } from "../../pages/_app";
import { useTranslation } from "react-i18next";
import { categoriesAdapter } from '../../lib/globalPropertiesAdapter'

const NewsItem = ({ news, locale }) => {
  const { t } = useTranslation();
  return (
    <div className="p-2 pl-3 metropolis_medium md:pl-6 md:p-3">
      <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px]">
        <a href="/news_details.html">{news.title}</a>
      </div>
      <div>
        <div className="flex items-center text-sm text-gray-700 md:text-base lg:text-xl xl:text-2xl">
          <div className="mr-2"> {t("Posted")}</div>
          <div className="mx-2"> {formateDate(news.timestamp, locale)}</div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({
  pos,
  openPosition,
  setOpenPosition,
  subCategory,
  locale,
}) => {
  const { t } = useTranslation();
  const openBody = "42rem";
  let expanded = pos === openPosition;
  const maxHeightChildBody = expanded ? openBody : null;
  const title = Object.keys(subCategory)[0];
  const news = Object.values(subCategory)[0]?.news;

  return (
    <div className="w-full my-2 md:m-2 md:ml-auto">
      <div
        className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1"
        onClick={() => setOpenPosition(expanded ? -1 : pos)}
      >
        <div className="mb-0 cursor-pointer text-gold1">
          <h1 className="py-2 pl-4 pr-2 text-[2rem] capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
            {title}
          </h1>
        </div>
      </div>

      <div
        className="overflow-hidden bg-gray-200 accordionChildBody"
        style={{ maxHeight: maxHeightChildBody }}
      >
        {news.map((regionalNews, i) => {
          return (
            <div key={i} className="p-2 pl-3 metropolis_medium md:pl-6 md:p-3">
              <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px]">
                <a href="/news_details.html">{regionalNews.title}</a>
              </div>
              <div>
                <div className="flex items-center text-lg text-gray-700 md:text-xl xl:text-2xl">
                  <div className="mr-2">{t("Posted")}</div>
                  <div className="mx-2">
                    {formateDate(regionalNews.timestamp, locale)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center mx-auto my-8">
          <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
            <img
              className="w-8 md:w-12"
              src="./img/icons/ArrowDown.png"
              alt="Arrow down"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

const NestedAccordion = ({ news, newsCategory }) => {
  const [openPosition, setOpenPosition] = useState(-1);
  const newsParent = news[newsCategory];
  return (
    <div className="mx-auto bg-slate-50">
      {newsParent?.children.map((subCategory, i) => (
        <AccordionItem
          pos={i}
          key={i}
          subCategory={subCategory}
          openPosition={openPosition}
          setOpenPosition={setOpenPosition}
        />
      ))}
    </div>
  );
};

export default function NewsMain({ data }) {
  const { t } = useTranslation();
  const { globalProperties, locale } = useContext(GlobalContext);

  const bgImage = imageAdapter(data);
  const adaptedNews = newsAdapter(data);
  const newsCategories = categoriesAdapter(globalProperties);

  return (
    <div>
      {/* <!-- parent --> */}
      <div
        className="pt-8 md:pt-16 lg:pt-72 px-8 lg:px-16"
        style={{
          background: `url(${bgImage}) no-repeat`,
        }}
      >
        {/* Internationl */}
        <div className="w-auto  mb-8 fadeInTop lg:w-full mx-atuo">
          {/* <!-- the hero section (first)--> */}
          <div className="object-cover bg-gray-200 bg-opacity-[0.50]">
            <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
              {newsCategories[0]}
            </div>
            {adaptedNews[newsCategories[0]]?.news.map((news, i) => (
              <NewsItem news={news} locale={locale} key={`news_item_${i}`} />
            ))}

            <div className="py-8">
              <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                <img
                  className="w-8 md:w-12"
                  src="./img/icons/ArrowDown.png"
                  alt={newsCategories[0]}
                  title={newsCategories[0]}
                />
              </h1>
            </div>
          </div>
        </div>{" "}
        <div className="lg:flex justify-between">
          <div className="lg:mr-4 flex flex-col items-center w-full lg:w-1/2">
            {/* Madhuban News */}

            {/* <!-- right section (first box) --> */}
            <div className="relative w-full my-4 bg-gray-200 h-fit">
              <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                {newsCategories[1]}
              </div>
              {adaptedNews[newsCategories[1]]?.news.map((news, i) => (
                <NewsItem news={news} locale={locale} key={`news_item_${i}`} />
              ))}
              <div className="my-8">
                <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                  <img
                    className="w-8 md:w-12"
                    src="./img/icons/ArrowDown.png"
                    alt={newsCategories[1]}
                    title={newsCategories[1]}
                  />
                </h1>
              </div>
            </div>

            {/* Regional Websites */}
            <div className="w-full">
              {/* <!-- right section (second box-right) --> */}
              <div className="relative w-full my-4 h-fit">
                <div className="flex items-center mb-0 text-slate-50 cursor-pointer bg-gold1 filosofia_italic">
                  <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                    {newsCategories[3]}
                  </div>
                </div>

                {/* <!--accordion child--> */}
                <NestedAccordion
                  news={adaptedNews}
                  newsCategory={newsCategories[3]}
                />
              </div>
            </div>
          </div>

          <div className="lg:ml-4 flex flex-col items-center w-full lg:w-3/6">
            {/* Special Focus News */}
            <div className="relative w-full my-4 bg-gray-200 h-fit">
              <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                {newsCategories[2]}
              </div>
              {adaptedNews[newsCategories[2]]?.news.map((news, i) => (
                <NewsItem news={news} locale={locale} key={`news_item_${i}`} />
              ))}
              <div className="my-8">
                <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                  <img
                    className="w-8 md:w-12"
                    src="./img/icons/ArrowDown.png"
                    alt={newsCategories[2]}
                    title={newsCategories[2]}
                  />
                </h1>
              </div>
            </div>

            {/* Transitions */}

            <div className="relative w-full my-4 bg-gray-200 h-fit">
              <div className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                {newsCategories[4]}
              </div>
              {adaptedNews[newsCategories[4]]?.news.map((news, i) => (
                <NewsItem news={news} locale={locale} key={`news_item_${i}`} />
              ))}
              <div className="my-8">
                <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                  <img
                    className="w-8 md:w-12"
                    src="./img/icons/ArrowDown.png"
                    alt={newsCategories[4]}
                    title={newsCategories[4]}
                  />
                </h1>
              </div>
            </div>
            {/* Links */}
            <div className="relative w-full my-4 bg-gray-200">
              <div className="flex items-center justify-between w-full bg-gold1 h-fit">
                <div className="flex lg:block">
                  <div className="p-2 text-[2rem] text-slate-50 filosofia_italic md:text-4xl xs:pl-2 md:pl-8">
                    for, CCs, NCs, NCTs,
                  </div>
                  <div className="p-2 text-[2rem] text-slate-50 filosofia_italic md:text-4xl xs:pl-2 md:pl-8">
                    and Board Members
                  </div>
                </div>
                <div className="mr-3 md:mr-8">
                  <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                    <img
                      className="w-7 md:w-10 xl:w-12"
                      src="../img/Lock.png"
                      alt="Arrow down icon"
                      title="Arrow down icon"
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
