import { adaptCustomPage } from "../../../lib/pageAdapter";
import { calendarLayout } from "../../../lib/apiClient";
import React from "react";
import CalendarMain from "../../../components/Events/calendar/CalendarMain";
import { CalendarContextProvider} from '../../../context/CalendarContext'

export default function Calendar({ data }) {
  return <CalendarContextProvider>
    <div><CalendarMain data={data}/></div>
    </CalendarContextProvider>;
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context, calendarLayout);
}