import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { Splide } from '@splidejs/react-splide'
import SliderItem from './SliderItem'
import { sliderAdapter, sliderImageAdapter, eventSliderAdapter } from '../../lib/sliderAdapter'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { IndexContext } from '../../pages'
import { NewsContext } from '../../pages/news'
import { EventsContext } from '../../pages/events'

const extractSlides = () => {
  const { locale } = useContext(GlobalContext)
  const isIndex = (Object.keys(useContext(IndexContext).data).length > 0 && Object.keys(useContext(IndexContext).data).length > 0) ? true : false
  const isNews = (Object.keys(useContext(NewsContext)).length > 0 && Object.keys(useContext(NewsContext).data).length > 0) ? true : false
  // const isEvents = !isIndex && !isNews ? true : false

  if (isIndex) {
    return sliderAdapter(useContext(IndexContext).data, locale)
  }
  if (isNews) {
    return sliderAdapter(useContext(NewsContext).data, locale)
  }
  return eventSliderAdapter(useContext(EventsContext).data, locale) // TODO: Create eventsSliderAdapter by analysing events-slider schema
}

export default function Slider () {

  const slides = extractSlides()

  return (
    <Splide
      className="visible splide"
      style={{ zIndex: '0' }}
      aria-label="My slider"
      options={{
        type: 'loop',
        arrows: false,
        speed: 1000,
        swipeDistanceThreshold: 300,
      }}
    >
      {slides.map((slide) => {
        const image = sliderImageAdapter(slide)
        return (
          <SliderItem
            key={`slide-${slide.id}`} 
            id={slide.id} 
            imageUrl={image.url} 
            imageAlternativeText={image.alternativeText} 
            title={slide.title} 
            startTimestamp={slide.startTimestampStr} 
            speakers={slide.speakers} 
            link={slide.link}>
          </SliderItem>
        )
      })}
    </Splide>
  )
}
