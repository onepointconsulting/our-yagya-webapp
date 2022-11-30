import { adaptCustomPage } from "../lib/pageAdapter";
import { calendarLayout } from "../lib/apiClient";
import React from "react";
import CalendarMain from "../components/Events/CalendarMain";

export default function Calendar({ data }) {
  console.log("Calendar data", data);
  return <div><CalendarMain /> </div>;
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context, calendarLayout);
}
