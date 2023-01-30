import React, { useContext } from 'react'
import EventsBlog from '../../../components/EventsBlog/EventBlog'
import { adaptCustomPage } from '../../../lib/pageAdapter'
import { eventsBlogLayout } from '../../../lib/apiClient'
import Head from 'next/head'
import MetaTags from '../../../components/SocialMedia/MetaTags'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../_app'
// import { singleEventAdapter } from '../../lib/eventsAdapter'

export default function EventBlog ({ data }) {
  // const singleEvent = singleEventAdapter(data)
  const { asPath } = useRouter()
  const { baseUrl } = useContext(GlobalContext)

  return (
    <>
      <Head>
        <MetaTags
          title='CATEGORY HERE'
          image='IMAGE HERE'
          description='DESCRIPTION HERE'
          path={`//${baseUrl}${asPath}`}
        />
      </Head>
      <EventsBlog data={data}/>
    </>
  )
}

// get server side props;
export async function getServerSideProps (context) {
  return await adaptCustomPage(context, eventsBlogLayout)
}
