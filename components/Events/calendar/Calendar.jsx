import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { calendarAdapter } from '../../../lib/eventsAdapter'
import { formateDate } from "../../../lib/dateAdapter";

const Calendar = ({data}) => {
  const calendarRef = useRef(null);
  const events = calendarAdapter(data);
  console.log("events", events)
  return (
    <>
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
        eventColor={'#ffffff'}
        eventBackgroundColor={'#e89295'}
        />
    </div>
        </>
  );
};

export default Calendar;
