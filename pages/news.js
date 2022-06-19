import LinksDirectory from '../components/LinksDirectory'
import News from '../components/News'
import Recources from '../components/Resources'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <Slider />
      <News />
      <Recources />
      <LinksDirectory />
    </>
  )
}
