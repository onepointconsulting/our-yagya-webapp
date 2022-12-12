import { adaptCustomPage } from "../lib/pageAdapter";
import EventsMain from "../components/Events/EventsMain";
import React, { createContext } from "react";
import { eventsLayout } from "../lib/apiClient";
export const EventsContext = createContext({ data: {} });

export default function Events({ data }) {
  return (
    <EventsContext.Provider value={{ data }}>
      <EventsMain data={data} />
    </EventsContext.Provider>
  );
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context, eventsLayout);
}
