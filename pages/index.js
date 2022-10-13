import React from 'react'
import Home from '../components/Home/Home'
import { adaptCustomPage } from '../lib/pageAdapter'

export default function Index({ data }) {
  return (
      <Home data={data} />
  );
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context)
}
