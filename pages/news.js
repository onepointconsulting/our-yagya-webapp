import LinksHome from '../components/LinksHome'
import News from '../components/News'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import StickyMenu from '../components/StickyMenu'

export default function Home() {
  return (
    <>
      <StickyMenu />
      <Slider />
      <News />
      <Recources />
      <LinksHome />
    </>
  )
}
