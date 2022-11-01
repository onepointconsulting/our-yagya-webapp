import Events from '../components/Events/Events'
import { adaptCustomPage } from '../lib/pageAdapter'

export default function EVents({data}) {

  return (
    <>
        <Events data={data}/>
    </>
  )
}

// get server side props;
export async function getServerSideProps(context) {
  return await adaptCustomPage(context)
}
