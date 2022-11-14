import { adaptCustomPage } from '../../lib/pageAdapter'
import React from 'react'

export default function SingleEvent({ data }) {
    return (
        <></>
    );
}

// get server side props;
export async function getServerSideProps(context) {
    return await adaptCustomPage(context)
}