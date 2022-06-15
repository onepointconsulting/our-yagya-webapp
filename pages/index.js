import DefaultMenu from '../components/DefaultMenu'
import HomeHero from '../components/HomeHero'
import LinksHome from '../components/LinksHome'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import StickyMenu from '../components/StickyMenu'

export default function Home() {
  return (
    <>
      <StickyMenu />
      <Slider />
      <HomeHero />
      <Recources />
      <LinksHome />
    </>
  )
}
