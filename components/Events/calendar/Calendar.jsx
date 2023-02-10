import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useContext, useMemo, useRef } from 'react'
import { calendarAdapter } from '../../../lib/eventsAdapter'
import {
  CALENDAR_ACTIONS,
  CalendarContext,
} from '../../../context/CalendarContext'

const Calendar = () => {
  const calendarRef = useRef(null)
  const { calendarData, dispatchCalendarData } = useContext(CalendarContext)

  const events = useMemo(() => {
    return calendarAdapter(calendarData.events)
  }, [calendarData])

  return (
    <>
      <div className="w-full lg:w-[40rem]">
        <FullCalendar
          ref={calendarRef}
          nowIndicator={true}
          editable={true}
          aspectRatio={1}
          plugins={[dayGridPlugin, interactionPlugin]}
          selectable
          contentHeight={450}
          events={events}
          eventColor={'#ffffff'}
          eventBackgroundColor={'#bf8f23'}
          eventDisplay="background"
          datesSet={(e) => {
            const { start, end } = e
            dispatchCalendarData({
              type: CALENDAR_ACTIONS.SET_SELECTED_PERIOD,
              selectedStartDate: start, selectedEndDate: end,
            })
          }}
        />
      </div>
    </>
  )
}

export default Calendar
