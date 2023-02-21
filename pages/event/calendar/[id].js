import { adaptCustomPage } from "../../../lib/pageAdapter";
import { calendarLayout } from "../../../lib/apiClient";
import React from "react";
import CalendarMain from "../../../components/Events/calendar/CalendarMain";
import { CalendarContextProvider } from "../../../context/CalendarContext";
import { TestLoader } from "../../../components/Loader/Loader ";
import { useLoadingState } from "../../../components/Loader/useLoadingState";

export default function Calendar({ data }) {
  const loading = useLoadingState();

  return (
    <CalendarContextProvider>
      {/* {loading ? (
      <TestLoader />
      ) : (

        <CalendarMain data={data} />
        )} */}
      <CalendarMain data={data} />
    </CalendarContextProvider>
  );
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context, calendarLayout);
}
