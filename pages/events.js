import { adaptCustomPage } from '../lib/pageAdapter'
import FeaturedEvents from '../components/Events/FeaturedEvents'
import React from 'react'
import { eventsLayout } from '../lib/apiClient'

export default function EVents({data}) {

  console.log('EVents', JSON.stringify(data))
  return (
      <div>
          <FeaturedEvents data={data}/>
      </div>
  )
}

// get server side props;
export async function getServerSideProps(context) {

  return await adaptCustomPage(context, eventsLayout)
}
