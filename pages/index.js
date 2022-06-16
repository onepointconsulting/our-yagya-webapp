import HomeHero from '../components/HomeHero'
import LinksHome from '../components/LinksHome'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import MainMenu from '../components/MainMenu'

export default function Home() {

  return (
    <>
      <MainMenu />
      <Slider />
      <HomeHero />
      <Recources />
      <LinksHome />
    </>
  )
}
