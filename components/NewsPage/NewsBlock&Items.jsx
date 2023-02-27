import { formateDate } from "../../lib/dateAdapter";
import { useTranslation } from "react-i18next";
import Link from 'next/link'
import { createNewsLinks } from "../../lib/newsRouter";

export const NewsItem = ({ news, locale }) => {
    const { t } = useTranslation();
    return (
      <div className="p-2 pl-3 metropolis_medium md:pl-6 md:p-3">
        <div className="text-redfull py-2 text-[14px] md:text-[26px] xl:text-[30px]">
          <Link href={`/single_news/${news.title}`}>
            {news.title}
          </Link>
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
  
export const ArrowDown = ({title, categoryId, showCard, total, hasChildren}) => {
    const href = createNewsLinks(showCard, categoryId, total, hasChildren)
    return (
      <Link href={href}>
        <div className="my-8">
              <h1 className="flex justify-center mt-4 text-5xl text-center text-gray-400 cursor-poainter">
                <img
                  className="w-8 md:w-12"
                  src="/img/icons/ArrowDown.png"
                  alt={`Down Arrow ${title}`}
                  title={`Down Arrow ${title}`}
                />
              </h1>
          </div>
      </Link>
    )
  }
  
export const NewsBlock = ({title, categoryId, news, locale, hasChildren, showCard, total}) => 
    (<>
      {news?.length > 0 && 
        <div className="relative w-full my-4 bg-gray-200 h-fit">
          <div className="py-2 pl-4 pr-2 text-xl text-white capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
            {title}
          </div>
          {news?.map((newsItem, i) => (
            <NewsItem news={newsItem} locale={locale} key={`${title}_${i}`} />
          ))}
          {/* {(hasChildren && showCard) && ( */}
            <ArrowDown title={title} categoryId={categoryId} showCard={showCard} total={total} hasChildren={hasChildren}/>
        {/* )} */}
        </div>}
        </>
    )
  
  
  // const AccordionItem = ({
  //   pos,
  //   openPosition,
  //   setOpenPosition,
  //   subCategory,
  //   locale,
  // }) => {
  //   const { t } = useTranslation();
  //   const openBody = "42rem";
  //   let expanded = pos === openPosition;
  //   const maxHeightChildBody = expanded ? openBody : null;
  //   const title = Object.keys(subCategory)[0];
  //   const news = Object.values(subCategory)[0]?.news;
  
  //   return (
  //     <div className="w-full my-2 md:m-2 md:ml-auto">
  //       <div
  //         className="flex items-center h-12 py-1 mx-auto border-2 cursor-pointer accordionChildHeader xs:py-4 md:py-8 md:mx-0 text-gold1 border-gold1"
  //         onClick={() => setOpenPosition(expanded ? -1 : pos)}
  //       >
  //         <div className="mb-0 cursor-pointer text-gold1">
  //           <h1 className="py-2 pl-4 pr-2 text-xl capitalize filosofia_italic bg-button-color md:text-4xl text-gold1">
  //             {title}
  //           </h1>
  //         </div>
  //       </div>
  
  //       <div
  //         className="overflow-hidden bg-gray-200 accordionChildBody"
  //         style={{ maxHeight: maxHeightChildBody }}
  //       >
  //         {news.map((regionalNews, i) => {
  //           return (
  //             <div key={i} className="p-2 pl-3 metropolis_medium md:pl-6 md:p-3">
  //               <div className="text-redfull py-2 text-[19px] md:text-[26px] xl:text-[30px]">
                
  //               <Link href={`/single_news/${regionalNews.id}`}>
  //                 {regionalNews.title}
  //               </Link>
  //               </div>
  //               <div>
  //                 <div className="flex items-center text-sm text-gray-700 md:text-xl xl:text-2xl">
  //                   <div className="mr-2">{t("Posted")}</div>
  //                   <div className="mx-2">
  //                     {formateDate(regionalNews.timestamp, locale)}
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}
  
  //         <div className="flex justify-center mx-auto my-8">
  //           <h1 className="flex justify-center text-5xl text-center text-gray-400 cursor-poainter">
  //             <img
  //               className="w-8 md:w-12"
  //               src="/img/icons/ArrowDown.png"
  //               alt={title}
  //               title={title}
  //             />
  //           </h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };