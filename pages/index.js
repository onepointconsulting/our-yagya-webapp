import LinksDirectory from "../components/LinksDirectory";
import Recources from "../components/Resources";
import Slider from "../components/Slider";
import MainMenu from "../components/MainMenu";
import { ParallaxProvider } from "react-scroll-parallax";
import HomeHero from "../components/Home/HomeHero";

export default function Home({ slider }) {
  console.log("slider", slider);
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
  );
}

// get server side props;
export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/api/page-layouts");
  const slider = await res.json();
  console.log("Page layout data", slider);
  return {
    props: { slider },
  };
}
