import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <div className="w-full md:w-[71%] md:mx-auto lg:w-[40rem]">
      <FullCalendar
        innerRef={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        editable
        selectable
      />
    </div>
  );
};

export default Calendar;
