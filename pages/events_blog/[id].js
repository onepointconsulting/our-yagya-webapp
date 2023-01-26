import React from 'react'
import { adaptCustomPage } from '../../lib/pageAdapter'
import { singleEventLayout } from '../../lib/apiClient'
import EventsBlog from '../../components/EventsBlog/EventBlog'

export default function EventBlog ({ data }) {
  return (
    <>
      <EventsBlog />
    </>
  )
}

// get server side props;
// export async function getServerSideProps (context) {
//   return await adaptCustomPage(context, singleEventLayout)
// }
