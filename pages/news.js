import LinksHome from '../components/LinksHome'
import News from '../components/News'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import MainMenu from '../components/MainMenu'

export default function Home() {
  return (
    <>
      <MainMenu />
      <Slider />
      <News />
      <Recources />
      <LinksHome />
    </>
  )
}
