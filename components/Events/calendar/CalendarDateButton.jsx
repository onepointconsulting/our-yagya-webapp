import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CalendarContext } from '../../../context/CalendarContext'
import { dateToFormat } from '../../../lib/dateAdapter'

/**
 * Contains the first calendar date and navigation buttons.
 * @constructor
 */
export default function CalendarDateButton () {

  const { calendarRef, calendarData } = useContext(CalendarContext);

  const { selectedStartDate } = calendarData

  const clickPrevious = () => calendarRef.current._calendarApi.prev()

  const clickNext = () => calendarRef.current._calendarApi.next()

  const { t } = useTranslation()
  return (<div className="flex justify-start filosofia_italic my-8">
      <div className="flex items-center justify-around">
        <img src="/img/arrow-left.png" onClick={clickPrevious}
             className="w-8 h-8 p-1 mr-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10"
             alt={t('Previous')}
        />
        <span
          className="mt-1 text-3xl md:text-4xl text-gold1">{dateToFormat(selectedStartDate)}</span>
        <img src="/img/asset1.png" onClick={clickNext}
             className="w-8 h-8 p-1 ml-2 border-2 border-gray-400 rounded cursor-pointer lg:h-12 lg:w-10"
             alt={t('Next')}/>
      </div>
    </div>)
}