import React, { useContext, useMemo } from 'react'
import { useState } from 'react'
import Link from '../../../node_modules/next/link'
import SocialMediaIcons from '../../NewsPage/SocialMediaIcons'
import { useTranslation } from 'react-i18next'
import { CalendarContext } from '../../../context/CalendarContext'
import { calendarFooterEventsAdapter } from '../../../lib/eventsAdapter'
import { formateDate } from '../../../lib/dateAdapter'
import MoreInfo from '../MoreInfo'

const ButtonsAccordion = ({ event }) => {
  const { t } = useTranslation()

  return (
    <div className="w-32 md:w-40 lg:w-60">
      <MoreInfo event={event}
                mainClass="flex rounded-md bg-gold1 my-1 xl:my-2 px-1 xl:px-2 py-1 xl:py-2 cursor-pointer items-center"
                imgClass="w-4 xs:w-6 lg:w-12"
                moreInfoClass="pl-1 md:pl-3 lg:pl-4 text-[9px] md:text-lg lg:text-xl xl:text-2xl text-white"/>

      {/* Register link button */}
      <div
        className="flex items-center px-1 py-1 my-1 rounded-md cursor-pointer bg-gold1 xl:my-2 xl:px-2 xl:py-2">
        <div>
          <img
            className="w-4 xs:w-6 lg:w-12"
            src="/img/icons8-pencil-64.png"
            alt={t('Register')}
          />
        </div>
        <Link href="#" target="_blank">
          <div
            className="pl-1 md:pl-3 lg:pl-4 text-[9px] md:text-lg lg:text-xl xl:text-2xl text-white">
            {t('Register')}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default function EventsAccordion () {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  const { calendarData } = useContext(CalendarContext)
  const { locale } = calendarData

  const events = useMemo(() => {
    return calendarFooterEventsAdapter(calendarData)
  }, [calendarData])

  return (
    <div>
      {events.map((event, index) => (
        <div
          key={index}
          className="relative my-4 bg-white rounded-lg shadow-lg"
        >
          {/* Accordion header */}
          <div
            className="flex items-center justify-between pr-1 bg-gray-100 cursor-pointer md:pr-4 metropolis_medium"
          >
            <div  className="flex items-center w-[93%] md:w-4/5 lg:w-5/6 xl:w-5/6"
                        onClick={() => handleAccordionClick(index)}
            >
              {/* event img */}
              <div className="relative w-20 h-16 xss:w-32 md:w-44 lg:w-96 xss:h-28 md:h-32 lg:h-48">
                <img
                  className="object-cover w-full h-full"
                  src={event.imageUrl}
                  alt={event.imageUrl}
                />
              </div>
              
              {/* event title and date */}
              <div className="px-2 md:px-4 w-36 xss:w-40 md:w-[23rem] lg:w-full">
                <h1
                  className="text-xs font-medium leading-4 text-redfull xs:text-[14px] md:text-xl xl:text-3xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                  {event.title}
                </h1>
                {!!event.subTitle && <h1
                  className="text-xs font-medium leading-4 text-redfull xs:text-[14px] md:text-lg xl:text-xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                  [{event.subTitle}]
                </h1>}
                <div className="items-center justify-between w-full pt-2 md:flex">
                  <div>
                    <p
                      className="text-[8px] text-gray-400 md:text-sm lg:text-[1.125rem]">
                      {formateDate(
                        event.startDateTime,
                        locale,
                        'dd LLLL yyyy',
                      )}
                    </p>
                  </div>

                  <div
                    className="text-[8px] text-gray-400 md:text-sm lg:text-[1.125rem]">
                    <p>{formateDate(
                      event.startDateTime,
                      locale,
                      'hh:mm a ZZZZ',
                    )}</p>
                  </div>
                </div>
              </div>
            </div>

            <ButtonsAccordion event={event}/>
          </div>

          {/* Accordion body */}
          {activeIndex === index && (
            <div
              className="relative w-full overflow-hidden text-white transition duration-500 ease-in-out bg-white border-b border-l border-r metropolis_medium"
              style={{ height: activeIndex === index ? 'auto' : '0' }}
            >
              <div
                className="flex flex-col-reverse justify-between p-3 lg:flex-row xl:p-5">
                <div className="w-full">
                  <p
                    className="text-sm text-gray-400 md:text-base lg:text-lg xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: event.description }}>
                  </p>
                </div>

                {/* <!-- img --> */}
                <div
                  className="relative flex flex-col items-end justify-between w-full lg:w-max">
                  <div className="md:w-full lg:w-96 xl:w-10/12">
                    <img
                      className="object-cover w-full mx-auto lg:h-auto"
                      src={event.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="relative w-10 my-2 text-center">
                    <SocialMediaIcons eventIndex={event}/>
                  </div>
                  {' '}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
