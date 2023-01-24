import React from "react";
import MurliSearchResults from "../components/MurliPage/MurliSearchResults";
import { adaptCustomPage } from '../lib/pageAdapter'


export default function MurliSearchResult() {
  return (
    <MurliSearchResults />
  );
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context)
}
