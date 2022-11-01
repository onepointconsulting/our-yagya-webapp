import React, { createContext } from 'react'
import Home from '../components/Home/Home'
import { adaptCustomPage } from '../lib/pageAdapter'
import { indexLayout } from '../lib/apiClient'

export const IndexContext = createContext({ data: {} })

export default function Index ({ data }) {
    return (
        <IndexContext.Provider value={{data}}>
            <Home data={data}/>
        </IndexContext.Provider>
    )
}

// get server side props;
export async function getServerSideProps (context) {
    return await adaptCustomPage(context, indexLayout)
}
