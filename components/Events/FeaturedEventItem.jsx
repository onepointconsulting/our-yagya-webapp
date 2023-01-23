import React, { useContext } from 'react'
import { formateDate } from '../../lib/dateAdapter'
import Link from '../../node_modules/next/link'
import { useTranslation } from 'react-i18next'
import { GlobalContext } from '../../pages/_app'

const FeaturedEventItem = ({ event }) => {
  const { locale } = useContext(GlobalContext)
  const { t } = useTranslation()

  if (event?.imageUrl?.length === 0) {
    return []
  }

  return (
    <>
      <div className="flex transparency">
        <div className="cursor-pointer w-full my-1 ">
          <div className="flex items-center justify-between">
            <Link href={`/single_event/${event.id}`}>
              <div className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                {/* <!-- image --> */}
                <div className="relative w-24 h-20 md:w-44 md:h-28">
                  <img
                    className="object-cover absolute w-full h-full"
                    src={event.imageUrl}
                    alt={event.alternativeText}
                    title={event.alternativeText}
                  />
                </div>

                {/* title and date */}
                <div className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                  <h1 className="text-xs font-medium leading-4 text-red-400 xs:text-[14px] md:text-base lg:text-xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                    {event.title}
                  </h1>

                  <div className="items-center justify-between w-full md:flex">
                    <div>
                      <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(
                          event.startDateTime,
                          locale,
                          "dd LLLL yyyy"
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(
                          event.startDateTime,
                          locale,
                          "hh:mm a ZZZZ"
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* more info and registeration */}
            <div className="w-20 xs:w-24 xl:w-36">
              <div className="flex items-center px-1 py-1 my-1 rounded-lg bg-gold1">
                <div>
                  <img
                    className="w-4 xs:w-6 lg:w-7"
                    src="/img/icons8-info-50.png"
                    alt={event.title}
                    title={event.title}
                  />
                </div>
                <Link href={`/single_event/${event.id}`}>
                  <div className="m-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px]">
                    {t("More Info")}
                  </div>
                </Link>
              </div>

              <div
                className={`flex items-center px-1 py-1 my-1 text-center rounded-lg bg-gold1 ${
                  event.joinLink
                    ? "bg-gold1 text-white"
                    : "bg-gray-300 text-slate-200 pointer-events-none"
                }`}
              >
                <div>
                  <img
                    className="w-4 xs:w-6 lg:w-7"
                    src="/img/icons8-pencil-64.png"
                    alt={event.title}
                    title={event.title}
                  />
                </div>
                <Link href="/">
                  <div className="pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px]">
                    {t("Register")}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedEventItem;