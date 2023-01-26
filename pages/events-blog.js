import React, { createContext } from 'react'
import EventBlog from '../components/Events/EventBlog'

export const EventsBlogContext = createContext({ data: {} });

export default function Events({ data }) {
  return (
    <EventsBlogContext.Provider value={{ data }}>
      <div>
        <EventBlog />
      </div>
    </EventsBlogContext.Provider>
  );
}

// get server side props;
// TODO : 
// export async function getServerSideProps(context) {
//   return await adaptCustomPage(context, eventsBlogLayout);
// }
