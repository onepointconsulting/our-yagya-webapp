import HomeHero from '../components/HomeHero'
import LinksHome from '../components/LinksHome'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import StickyMenu from '../components/StickyMenu'
import { useEffect } from 'react'
import { FETCH_FOOTERS_DATA } from '../lib/apiClient'

export default function Home() {

    useEffect(() => {
        FETCH_FOOTERS_DATA()
            .then(res => console.log('footer results', res))
            .catch((e) => console.error("Failed to fetch footers", e))
    }, [])

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
