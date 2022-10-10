import React from 'react'
import Home from '../components/Home/Home'

export default function Index({ data }) {
  return (
      <Home />
  );
}

// get server side props;
export async function getServerSideProps() {
  // const layoutData = await pageLayout(PAGE_LAYOUTS.HOME);
  return { props: { data: {} } };
}
