import React, { useContext, useMemo } from 'react'
import { CalendarContext } from '../../../context/CalendarContext'
import { formateDate } from '../../../lib/dateAdapter'
import { calendarSpecialDaysAdapter } from '../../../lib/calendarAdapter'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const SingleSpecialDay = ({ event, locale }) => {
  return (
    <div className="p-2">
      <div
        className="text-lg leading-7 font-medium text-redfull capitalize md:text-xl xl:text-2xl">
        <Link href={`/single_event/${event.id}`}>{event.title}</Link>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <p
            className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
            {formateDate(
              event.startDateTime,
              locale,
              'dd LLLL yyyy',
            )}
          </p>
        </div>

        <div
          className="text-xs xs:text-sm text-gray-700 md:text-base lg:text-lg">
          <p>
            {formateDate(
              event.startDateTime,
              locale,
              'hh:mm a ZZZZ',
            )}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SpecialDays () {

  const { t } = useTranslation()
  const { calendarData } = useContext(CalendarContext)
  const { locale } = calendarData
  const specialEvents = useMemo(() => {
    return calendarSpecialDaysAdapter(calendarData)
  }, [calendarData])

  const hasSpecialDays = specialEvents?.length > 0

  return (
    <div className="text-xl text-gray-900 lg:border-0 border-2 border-gold1">
      {!!hasSpecialDays && <div>
        <div className="bg-white">
          <h1
            className="pb-2 ml-2 text-3xl font-light filosofia_italic md:text-4xl text-gold1 md:ml-0 md:p-2">
            {t('Special Days')}
          </h1>

          <div className="metropolis_medium mt-4">
            {hasSpecialDays && specialEvents.map((event, index) => (
              <SingleSpecialDay event={event} locale={locale}
                                key={`special_day_${index}`}/>
            ))}
          </div>
        </div>
      </div>}
    </div>
  )
}
