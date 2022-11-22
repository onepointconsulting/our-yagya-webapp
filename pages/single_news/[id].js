import React from 'react'
import SingleEventMain from '../../components/Events/SingleEventMain'
import { adaptCustomPage } from '../../lib/pageAdapter'
import { singleEventLayout } from '../../lib/apiClient'
import SingleNewsMain from '../../components/NewsCom/SingleNewsMain';

export default function SingleNews({ data }) {
    return (
        <SingleNewsMain data={data} />
    );
}

// get server side props;
export async function getServerSideProps(context) {
    return await adaptCustomPage(context, singleEventLayout)
}