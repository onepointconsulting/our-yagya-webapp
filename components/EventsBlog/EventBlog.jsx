import React, { useContext } from 'react'
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
                <div className="mx-auto w-full lg:h-[20rem] xl:h-[28rem] pb-[46%] relative cursor-pointer">
                  <Link href={`/single_event/${data.id}`}>
                    <img className="object-cover w-full h-full mx-auto absolute inset-0" src={data.img} alt="" />
                  </Link>
                </div>

                : <></>}
              <div className="py-8">
                <Link href={`/single_event/${data.id}`}>
                  <h1 className="text-xl font-medium text-red-500 md:text-3xl lg:text-4xl xl:text-5xl cursor-pointer">
                    {data.title}
                  </h1>

                </Link>
                {data.subTitle ?
                  <h1 className="text-xl font-medium text-red-500 md:text-xl lg:text-2xl xl:text-3xl cursor-pointer">
                    [ {data.subTitle}]
                  </h1>
                  : <></>}
                {data.subTitle && (<p className="text-base text-gray-400 md:text-xl lg:text-2xl xl:text-3xl">
                  {data.subTitle}
                </p>)}

                <div className="mt-4">
                  <p className="text-base text-gray-400 md:text-xl lg:text-2xl xl:text-3xl">
                    {data.date}
                  </p>

                  <div className="text-base text-gray-400 md:text-xl lg:text-2xl my-4" dangerouslySetInnerHTML={{ __html: data.description }}>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* more info button */}
          <div className="w-32 md:w-36 lg:w-72">
            <div className="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer items-center">
              <div>
                <img className="w-4 xs:w-6 lg:w-12"
                  src="/img/icons8-info-50.png" alt="" />
              </div>
              <Link href={`/single_event/${data.id}`}>
                <div
                  className="md:pl-1 lg:pl-4 text-[9px] md:text-sm lg:text-xl xl:text-2xl text-white">
                  {t("More Info")}
                </div>
              </Link>
            </div>

            {/* Regsiter link button */}

            <div className="flex rounded-md bg-pinkFull items-center text-center my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer">
              <div>
                <img className="w-4 xs:w-6 lg:w-12"
                  src="/img/icons8-pencil-64.png" alt="" />
              </div>
              {data.joinLink ? (
                <Link href={data.joinLink}>
                  <a target="_blank">
                  <div className={`md:pl-1 lg:pl-4 text-[9px] md:text-sm lg:text-xl xl:text-2xl text-white ${data.joinLink ? "text-white" : "cursor-text"}`}>
                    {t("Register Now")}
                  </div>
                  </a>
                </Link>
              ) : (
                <div className="md:pl-1 lg:pl-4 text-[9px] md:text-sm lg:text-xl xl:text-2xl text-slate-200 cursor-text">
                  {t("Register Now")}
                </div>
              )}
            </div>

            {/* Live link button */}
            {data.liveLink ? <div className="flex rounded-md bg-pinkFull items-center text-center my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer">
              <div>
                <img className="w-4 xs:w-6 lg:w-12"
                  src="/img/icons8-pencil-64.png" alt="" />
              </div>
              <Link href={data.liveLink}>
                <a target="_blank">

                <div className="md:pl-1 lg:pl-4 text-[9px] md:text-sm lg:text-xl xl:text-2xl text-white">
                  {t("Join Now")}
                </div>
                </a>
              </Link>
            </div> : <> </>}

          </div>

        </div>
      ),
      )}
    </div>
  )
}

export default EventBlog
