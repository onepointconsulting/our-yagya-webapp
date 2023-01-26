import { adaptCustomPage } from "../lib/pageAdapter";
import EventsBlogMain from "../components/EventsBlog/EventsBlogMain";
import React, { createContext } from "react";
import { eventsLayout } from "../lib/apiClient";
export const EventsBlogContext = createContext({ data: {} });

export default function Events({ data }) {
  return (
    <EventsBlogContext.Provider value={{ data }}>
      <EventsBlogMain data={data} />
    </EventsBlogContext.Provider>
  );
}

// get server side props;
// TODO : 
// export async function getServerSideProps(context) {
//   return await adaptCustomPage(context, eventsBlogLayout);
// }
