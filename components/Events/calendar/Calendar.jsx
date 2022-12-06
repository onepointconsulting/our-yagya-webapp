import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { calendarAdapter, eventsAdapter } from '../../../lib/eventsAdapter'
import { formateDate } from "../../../lib/dateAdapter";

const Calendar = ({data}) => {
  const calendarRef = useRef(null);
  const events = calendarAdapter(data);


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
        events={[
          {
            title: "",
            allDay: true,
            start: "2022-12-20T14:38:00.000Z",
            end: "2022-12-29T14:38:00.000Z",
            color: "red",//This will set the color
            display: "green"
          }
        ]}
        eventColor={'#ffffff'}
        eventBackgroundColor={'#e89295'}
        />
    </div>
        </>
  );
};

export default Calendar;
