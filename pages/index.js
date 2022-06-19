import LinksDirectory from '../components/LinksDirectory'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import MainMenu from '../components/MainMenu'
import { ParallaxProvider } from "react-scroll-parallax";
import StickyMenu from '../components/StickyMenu'
import HomeHero from '../components/Home/HomeHero';

export default function Home() {

  return (
    <>
      <MainMenu />
      <StickyMenu />
      <Slider />
      <ParallaxProvider>
      <HomeHero />
      </ParallaxProvider>
      <Recources />
      <ParallaxProvider>
      <LinksDirectory />
      </ParallaxProvider>
    </>
  )
}
