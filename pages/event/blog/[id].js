import React from 'react'
import EventsBlog from '../../../components/EventsBlog/EventBlog'
import { adaptCustomPage } from '../../../lib/pageAdapter'
import { eventsBlogLayout } from '../../../lib/apiClient'
// import { singleEventAdapter } from '../../lib/eventsAdapter'

export default function EventBlog ({ data }) {
  // const singleEvent = singleEventAdapter(data)

  return (
    <>
      <EventsBlog data={data?.data}/>
    </>
  )
}

// get server side props;
export async function getServerSideProps (context) {
  return await adaptCustomPage(context, eventsBlogLayout)
}
