import LinksDirectory from '../components/LinksDirectory'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import MainMenu from '../components/MainMenu'
import { ParallaxProvider } from "react-scroll-parallax";
import HomeHero from '../components/Home/HomeHero';

export default function Home() {

  return (
    <>
      <MainMenu />
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
