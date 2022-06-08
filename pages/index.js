import DefaultMenu from '../components/DefaultMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import LinksHome from '../components/LinksHome'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import SticyMenu from '../components/SticyMenu'

export default function Home() {
  return (
    <>
      <Header />
      <SticyMenu />
      <DefaultMenu />
      <Slider />
      <HomeHero />
      <Recources />
      <LinksHome />
      <Footer/>
    </>
  )
}
