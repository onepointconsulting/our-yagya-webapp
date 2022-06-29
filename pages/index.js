import LinksDirectory from '../components/LinksDirectory'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import MainMenu from '../components/MainMenu'
import { ParallaxProvider } from 'react-scroll-parallax'
import HomeHero from '../components/Home/HomeHero'
import { pageLayout } from '../lib/apiClient'
import { PAGE_LAYOUTS } from '../lib/pageLayouts'

export default function Home ({ data }) {
    return (
        <>
            <MainMenu/>
            <Slider data={data}/>
            <ParallaxProvider>
                <HomeHero/>
            </ParallaxProvider>
            <Recources/>
            <ParallaxProvider>
                <LinksDirectory/>
            </ParallaxProvider>
        </>
    )
}

// get server side props;
export async function getServerSideProps () {
    const layoutData = await pageLayout(PAGE_LAYOUTS.HOME)
    return { props: { data: layoutData } }
}
