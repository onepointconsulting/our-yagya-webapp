import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';

export default function About({ data }) {
  return (
      <AboutUs />
  );
}

// get server side props;
export async function getServerSideProps() {
  // const layoutData = await pageLayout(PAGE_LAYOUTS.HOME);
  return { props: { data: {} } };
}
