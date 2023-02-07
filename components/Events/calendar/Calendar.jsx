import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useRef } from 'react'
import { calendarAdapter } from '../../../lib/eventsAdapter'

const Calendar = ({ data }) => {
  const calendarRef = useRef(null)
  const events = calendarAdapter(data.data)
  
  return (
    <>
      <div className="w-full lg:w-[40rem]">
        <FullCalendar
          innerRef={calendarRef}
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
