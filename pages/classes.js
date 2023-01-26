import Classes from '../components/ClassesPage/Classes'
import { adaptCustomPage } from '../lib/pageAdapter'

export default function classes() {
  return (
    <>
      <Classes />
    </>
  );
}

// get server side props;
export async function getServerSideProps(context) {
    return await adaptCustomPage(context)
}