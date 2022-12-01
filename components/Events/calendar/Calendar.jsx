import FullCalendar from '@fullcalendar/react'
import { dayGridPlugin, interactionPlugin } from '@fullcalendar/interaction'

const Calendar = () => {
  return <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
  />
}

export default Calendar