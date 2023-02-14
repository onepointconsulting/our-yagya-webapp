import React, { useContext } from 'react'
import SingleEventMain from '../../components/Events/SingleEventMain'
import { adaptCustomPage } from '../../lib/pageAdapter'
import { singleEventLayout } from '../../lib/apiClient'
import Head from 'next/head'
import MetaTags from '../../components/SocialMedia/MetaTags'
import { useRouter } from 'next/router'
import { GlobalContext } from '../_app'
import { singleEventAdapter } from '../../lib/eventsAdapter'

export default function SingleEvent ({ data }) {
  const singleEvent = singleEventAdapter(data)
  const { asPath } = useRouter()
  const { baseUrl } = useContext(GlobalContext)

  return (
    <>
      <Head>
        <title>{singleEvent.eventTitle}</title>
        <MetaTags
          title={singleEvent.eventTitle}
          image={
            singleEvent.sEventImage?.length > 0 && singleEvent.sEventImage[0]
          }
          description={singleEvent.sEeventDescription}
          path={`//${baseUrl}${asPath}`}
        />

      </Head>
      <SingleEventMain data={data}/>
    </>
  )
}

// get server side props;
export async function getServerSideProps (context) {
  return await adaptCustomPage(context, singleEventLayout)
}
