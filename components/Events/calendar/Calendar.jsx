import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useContext, useMemo, useRef } from 'react'
import { calendarAdapter } from '../../../lib/eventsAdapter'
import { CalendarContext } from '../../../context/CalendarContext'

const Calendar = () => {
  const calendarRef = useRef(null)
  const { calendarData } = useContext(CalendarContext);
  
  const events = useMemo(() => {
    return calendarAdapter(calendarData.events)
    }, [calendarData]);

  
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
          eventColor={'#e89295'}
          eventBackgroundColor={'#e89295'}
          eventDisplay='background'
        />
      </div>
    </>
  )
}

export default Calendar
