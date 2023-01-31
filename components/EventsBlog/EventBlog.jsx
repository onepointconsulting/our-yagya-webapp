import React, { useContext } from 'react'
import SocialMediaIcons from '../NewsPage/SocialMediaIcons';
import { blogEventsAdapter } from '../../lib/eventsAdapter';
import { GlobalContext } from '../../pages/_app'
import Link from '../../node_modules/next/link';
import { useTranslation } from "react-i18next";

const EventBlog = ({ data }) => {
  const { t } = useTranslation();
  const { locale } = useContext(GlobalContext)
  const eventDetailsData = blogEventsAdapter(data.events, locale)

  return (
    <div className="w-full h-auto mb-[38rem]">
      {eventDetailsData.map((data, index) => (
        <div className="px-2 md:px-4 xl:px-24 my-12 flex justify-between items-baseline" key={`events_blog_${index}`}>
          <div className='w-full'>

            {/* <!-- img, title, date, and description --> */}
            <div className="w-full">
              {data.img ?
                <div className="mx-auto w-full lg:h-[20rem] xl:h-[28rem] pb-[46%] relative">
                  <img className="object-cover w-full h-full mx-auto absolute inset-0" src={data.img} alt="" />
                </div>

                : <></>}
              <div className="py-8">
                <h1 className="text-xl font-medium text-red-500 md:text-3xl lg:text-4xl xl:text-5xl">
                  {data.title}
                </h1>

                {data.subTitle && (<p className="text-base text-gray-400 md:text-xl lg:text-2xl xl:text-3xl">
                    {data.subTitle}
                  </p>)}

                <div className="mt-4">
                  <p className="text-base text-gray-400 md:text-xl lg:text-2xl xl:text-3xl">
                    {data.date}
                  </p>


                  <p className="text-base text-gray-400 md:text-xl lg:text-2xl my-4">
                    {data.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus deserunt dignissimos sint quidem error alias nihil illum, vitae amet.
                  </p>


                </div>
              </div>
            </div>
          </div>

          {/* more info and join button */}
          <div className="w-32 md:w-36 lg:w-72">
            <div
              className="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer items-center">
              <div>
                <img className="w-4 xs:w-6 lg:w-12"
                  src="/img/icons8-info-50.png" alt="" />
              </div>
              <Link href={`/single_event/${data.id}`}>
                <div
                  className="md:pl-1 lg:pl-4 text-sm md:text-base lg:text-2xl xl:text-3xl text-white">
                  {t("More Info")}
                </div>
              </Link>
            </div>

            <div className="flex rounded-md bg-pinkFull items-center text-center my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer">
              <div>
                <img className="w-4 xs:w-6 lg:w-12"
                  src="/img/icons8-pencil-64.png" alt="" />
              </div>
              {data.joinLink ? (
                <Link href={data.joinLink} target="_blank">
                  <div
                    className={`md:pl-1 lg:pl-4 text-sm md:text-base lg:text-2xl xl:text-3xl text-white ${data.joinLink ? "text-white" : "cursor-text"}`}>
                    {t("Join now")}
                  </div>
                </Link>
              ) : (
                <div className="md:pl-1 lg:pl-4 text-sm md:text-base lg:text-2xl xl:text-3xl text-slate-200 cursor-text">
                  {t("Join now")}
                </div>
              )}
            </div>

            <div className="float-right cursor-pointer">
              <SocialMediaIcons eventIndex={index} />
            </div>
          </div>

        </div>
      ),
      )}


    </div>
  )
}

export default EventBlog
