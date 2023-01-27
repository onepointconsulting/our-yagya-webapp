import React from 'react'
import EventsBlog from '../../../components/EventsBlog/EventBlog'

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
