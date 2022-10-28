import { adaptCustomPage } from '../lib/pageAdapter'
import { newsLayout } from '../lib/apiClient'

export default function News ({ data }) {
    console.log('News data', data)
    // TODO: implement slider.
    return (
        <>
            <h>Hello world.</h>
        </>
    )
}

export async function getServerSideProps (context) {
    return await adaptCustomPage(context, newsLayout)
}
