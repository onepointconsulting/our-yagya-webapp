import React, { useContext } from "react";
import { imageAdapter } from "../../lib/imageAdapter";
import { GlobalContext } from "../../pages/_app";
import { getFeaturedCategory, getFeaturedItems, getNonFeaturedItems } from "../../lib/eventsAdapter";
import { ArrowDown, NewsBlock, NewsItem } from "./NewsBlock&Items";

export default function NewsMain({ data }) {
  const { locale } = useContext(GlobalContext);

  const bgImage = imageAdapter(data);
  const allNews = data.data.news;
  const featuredCategory = getFeaturedCategory(allNews)  

  // FEATURED (International on front-page)
  const featuredItem = getFeaturedItems(allNews, featuredCategory.id)
  const featuredNews = featuredItem?.news
  const featuredHasChildren = featuredItem?.children_count > 0
  const featuredShowCard = featuredItem?.show_card > 0
  const featuredTotal = featuredItem?.total

  return (
    <div>
      {/* <!-- parent --> */}
      <div
        className="px-4 pt-4 md:pt-16 lg:pt-72 lg:px-16"
        style={{
          background: `url(${bgImage}) no-repeat`,
        }} >

      {/* FEATURED (International) */}
      {featuredNews?.length > 0 && (
        <div className="w-auto mb-8 fadeInTop lg:w-full mx-atuo">
        <div className="object-cover bg-gray-200 bg-opacity-[0.50]">
            <div className="py-2 pl-4 pr-2 text-xl capitalize text-white filosofia_italic bg-button-color bg-gold1 md:text-4xl">
              {featuredCategory.title}
            </div>
            {featuredNews?.map((newsItem, i) => (
              <NewsItem news={newsItem} locale={locale} key={`${featuredCategory.title}_${i}`} />
            ))}
            <ArrowDown title={featuredCategory.title} categoryId={featuredCategory.id} showCard={featuredShowCard} total={featuredTotal} hasChildren={featuredHasChildren} />
          </div>
        </div>
            )}
        {/* All non-featured news */}
        <div className="justify-between lg:flex">
          <div className="flex flex-col items-center w-full lg:ml-4 lg:w-3/6">
          {getNonFeaturedItems(allNews, featuredCategory.id)?.map(newsItem => (
              <NewsBlock title={newsItem.title}
                categoryId={newsItem.id}
                news={newsItem.news}
                locale={locale}
                hasChildren={newsItem.children_count > 0}
                showCard={newsItem.show_card > 0}
                total={newsItem.total}/>
            ))}
            {/* Links */}
            <div className="relative w-full my-4 bg-gray-200">
              <div className="flex items-center justify-between w-full bg-gold1 h-fit">
                <div className="flex lg:block">
                  <div className="p-2 text-xl text-white filosofia_italic md:text-3xl lg:text-4xl xs:pl-2 md:pl-8">
                    for, CCs, NCs, NCTs,
                  </div>
                  <div className="p-2 text-xl text-white filosofia_italic md:text-3xl lg:text-4xl xs:pl-2 md:pl-8">
                    and Board Members
                  </div>
                </div>
                <div className="mr-3 md:mr-8">
                  <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                    <img
                      className="w-7 md:w-10 xl:w-12"
                      src="/img/Lock.png"
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
