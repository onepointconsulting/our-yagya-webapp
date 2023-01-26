import { adaptCustomPage } from "../lib/pageAdapter";
import { calendarLayout } from "../lib/apiClient";
import React from "react";
import CalendarMain from "../components/Events/calendar/CalendarMain";

export default function Calendar({ data }) {
  return <div><CalendarMain data={data}/></div>;
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context, calendarLayout);
}
