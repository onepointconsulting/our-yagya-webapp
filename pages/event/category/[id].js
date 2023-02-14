import React from 'react'
import EventsMain from '../../../components/Events/EventsMain'
import { adaptCustomPage } from '../../../lib/pageAdapter'
import { eventsLayout } from '../../../lib/apiClient'

export default function SingleCategory ({ data }) {

  return (
    <>
      <EventsMain data={data}/>
    </>
  )
}

// get server side props;
export async function getServerSideProps (context) {
  return await adaptCustomPage(context, eventsLayout)
}
