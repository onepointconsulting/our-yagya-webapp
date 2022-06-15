import DefaultMenu from '../components/DefaultMenu'
import HomeHero from '../components/HomeHero'
import LinksHome from '../components/LinksHome'
import Recources from '../components/Resources'
import Slider from '../components/Slider'
import StickyMenu from '../components/StickyMenu'
import { useEffect } from 'react'
import { fetchFooters } from '../lib/apiClient'

export default function Home() {

    useEffect(() => {
        fetchFooters()
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
