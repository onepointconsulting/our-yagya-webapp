import React, { useContext } from 'react'
import EventsMain from '../../../components/Events/EventsMain'
import { adaptCustomPage } from '../../../lib/pageAdapter'
import { eventsLayout } from '../../../lib/apiClient'
import Head from 'next/head'
import MetaTags from '../../../components/SocialMedia/MetaTags'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../_app'
// import { singleEventAdapter } from '../../lib/eventsAdapter'

export default function SingleCategory ({ data }) {
  // const singleEvent = singleEventAdapter(data)
  const { asPath } = useRouter()
  const { baseUrl } = useContext(GlobalContext)

  return (
    <>
      <Head>
        <title>CATEGORY HERE</title>
        <MetaTags
          title='CATEGORY HERE'
          image='IMAGE HERE'
          description='DESCRIPTION HERE'
          path={`//${baseUrl}${asPath}`}
        />
      </Head>
      <EventsMain data={data}/>
    </>
  )
}

// get server side props;
export async function getServerSideProps (context) {
  return await adaptCustomPage(context, eventsLayout)
}
