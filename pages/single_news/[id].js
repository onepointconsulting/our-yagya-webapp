import React from 'react'
import { adaptCustomPage } from '../../lib/pageAdapter'
import { singleNewsLayout } from '../../lib/apiClient'
import SingleNewsMain from '../../components/NewsCom/SingleNewsMain'

export default function SingleNews({ data }) {
    return (
        <SingleNewsMain data={data} />
    );
}

// get server side props;
export async function getServerSideProps(context) {
    return await adaptCustomPage(context, singleNewsLayout)
}