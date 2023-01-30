import React, { useContext } from 'react'
import SocialMediaIcons from '../NewsPage/SocialMediaIcons';
import { blogEventsAdapter } from '../../lib/eventsAdapter';
import { GlobalContext } from '../../pages/_app'
import Link from '../../node_modules/next/link';
import { useTranslation } from "react-i18next";

const EventBlog = ({data}) => {

  console.log("data : " , data.events)
  const { t } = useTranslation();
  const { locale } = useContext(GlobalContext)
  const eventDetailsData = blogEventsAdapter(data.events, locale)

  return (
    <div className="w-full h-auto">
      {eventDetailsData.map((data, index) => (
          <div className="mx-4 md:mx-8 my-8" key={`events_blog_${index}`}>
            <div className="relative">
              <img className="w-full lg:w-[80%]" src={data.img} alt=""/>
            </div>

            {/* <!-- online events section 1 --> */}
            <div className="relative my-4">
              <div className="relative flex justify-between bg-white metropolis_medium">
                <div className="flex w-full md:w-4/5 lg:w-5/6 xl:w-5/6">
                  <div className="w-full">
                    <h1
                      className="text-lg font-medium text-red-500 md:text-xl lg:text-[1.4rem] xl:text-4xl">
                      {data.title}
                    </h1>

                    <div className="mt-4">
                      <h4
                        className="text-[14px] text-gray-400 md:text-base lg:text-xl xl:text-4xl">
                        <p className="md:leading-[2rem] lg:leading-[3.5rem]">
                          {data.date}
                        </p>
                      </h4>

                      <h4
                        className="text-base text-gray-400 md:text-xl lg:text-xl xl:text-4xl">
                        <p className="md:leading-[2rem] lg:leading-[3.5rem]">
                          {data.description}
                        </p>


                      </h4>

                    </div>
                  </div>
                </div>

                <div className="w-32 md:w-36 lg:w-72">
                  <div
                    className="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer items-center">
                    <div>
                      <img className="w-4 xs:w-6 lg:w-12"
                           src="/img/icons8-info-50.png" alt=""/>
                    </div>
                    <Link href={`/single_event/${data.id}`}>
                    <div
                      className="m-auto mt-auto text-sm text-right text-white md:text-base lg:text-xl xl:text-2xl">
                      {t("More Info")}
                    </div>
                    </Link>
                  </div>

                  <div
                    className="flex rounded-md bg-gold1 items-center text-center my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer">
                    <div>
                      <img className="w-4 xs:w-6 lg:w-12"
                           src="/img/icons8-pencil-64.png" alt=""/>
                    </div>
                    {data.joinLink ? (
            <Link href={data.joinLink} target="_blank">
              <div
                className={`pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center ${
                  data.joinLink ? "text-white" : "text-white cursor-text"
                } onlnie_eve_title lg:text-sm xl:text-[13px]`}
              >
                {t("Register")}
              </div>
            </Link>
          ) : (
            <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-200 cursor-text onlnie_eve_title lg:text-sm xl:text-[13px]">
              {t("Register")}
            </div>
          )}
                  </div>

                  <div className="float-right mt-2 mr-2 cursor-pointer lg:mt-4 lg:mr-4 text-center relative">
                     <SocialMediaIcons eventIndex={index}  />

                  </div>
                </div>

              </div>
            </div>

          </div>
        ),
        )}


    </div>
  )
}

export default EventBlog
