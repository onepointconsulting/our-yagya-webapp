import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from '@fullcalendar/daygrid'
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <FullCalendar
      innerRef={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      editable
      selectable
    />
  );
}

export default Calendar