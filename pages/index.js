import React from 'react'
import Home from '../components/Home/Home'
import { pageLayout } from '../lib/apiClient'

export default function Index({ data }) {
  return (
      <Home data={data} />
  );
}

// get server side props;
export async function getServerSideProps(context) {
  const data = await pageLayout(context)
  return { props: { data } };
}
