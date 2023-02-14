import React, { useContext } from 'react'
import EventsMain from '../../../components/Events/EventsMain'
import { adaptCustomPage } from '../../../lib/pageAdapter'
import { eventsLayout } from '../../../lib/apiClient'
import Head from 'next/head'
import MetaTags from '../../../components/SocialMedia/MetaTags'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../_app'

export default function SingleCategory ({ data }) {
  const { asPath } = useRouter()
  const { baseUrl } = useContext(GlobalContext)

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
