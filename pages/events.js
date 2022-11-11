import { adaptCustomPage } from '../lib/pageAdapter'
import EventsMain from '../components/Events/EventsMain'
import React from 'react'
import { eventsLayout } from '../lib/apiClient'

export default function EVents({data}) {

  return (
      <div>
          <EventsMain data={data}/>
      </div>
  )
}

// get server side props;
export async function getServerSideProps(context) {

  return await adaptCustomPage(context, eventsLayout)
}
