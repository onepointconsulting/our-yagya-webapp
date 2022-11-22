import React from 'react'
import SingleEventMain from '../../components/Events/SingleEventMain'
import { adaptCustomPage } from '../../lib/pageAdapter'
import { singleEventLayout } from '../../lib/apiClient'

export default function SingleEvent({ data }) {
    return (
        <SingleEventMain data={data} />
    );
}

// get server side props;
export async function getServerSideProps(context) {
    return await adaptCustomPage(context, singleEventLayout)
}