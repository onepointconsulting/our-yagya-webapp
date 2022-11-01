import { adaptCustomPage } from '../lib/pageAdapter'
import NewsMain from '../components/NewsCom/NewsMain'
import { newsLayout } from '../lib/apiClient'
import Slider from '../components/Slider/Slider'

export default function News({ data }) {
  console.log("News data", data);
  // TODO: implement slider.
  return (
    <>
      <Slider data={data} />
      <NewsMain data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  return await adaptCustomPage(context, newsLayout);
}
