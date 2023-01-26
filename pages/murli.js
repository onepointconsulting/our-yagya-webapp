import React from 'react'
import MainMurli from '../components/MurliPage/MainMurli'
import { adaptCustomPage } from '../lib/pageAdapter'

export default function Murli({ data }) {
  return (
      <MainMurli />
  );
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context)
}
