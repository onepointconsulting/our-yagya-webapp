import React from 'react'
import { adaptCustomPage } from '../../lib/pageAdapter'

export default function SingleNews ({ data }) {

    return (
        <></>
    )
}

// get server side props;
export async function getServerSideProps (context) {
    return await adaptCustomPage(context)
}