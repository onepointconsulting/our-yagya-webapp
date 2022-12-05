import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { calendarAdapter } from '../../../lib/eventsAdapter'

const Calendar = ({data}) => {
  console.log("Calendar data", JSON.stringify(data));
  const events = calendarAdapter(data)
  console.log("Calendar adapter data", JSON.stringify(events));
  const calendarRef = useRef(null);
  return (
    <div className="w-full md:w-[71%] md:mx-auto lg:w-[40rem]">
      <FullCalendar
        innerRef={calendarRef}
        nowIndicator={true}
        editable={true}
        aspectRatio={1}
        plugins={[dayGridPlugin, interactionPlugin]}
        selectable
        contentHeight={450}
        events={events}
        eventColor={'#d1232a'}
      />
    </div>
  );
};

export default Calendar;
