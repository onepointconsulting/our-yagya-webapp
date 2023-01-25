import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { Splide } from '@splidejs/react-splide'
import SliderItem from './SliderItem'
import { sliderAdapter, sliderImageAdapter, eventSliderAdapter } from '../../lib/sliderAdapter'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { IndexContext } from '../../pages'
import { NewsContext } from '../../pages/news'
import { EventsContext } from '../../pages/events'
import { globalPropertyAdapter } from '../../lib/globalPropertiesAdapter'

const useExtractSlides = () => {
  const { locale, globalProperties } = useContext(GlobalContext)
  const isIndex = (Object.keys(useContext(IndexContext).data).length > 0 &&
    Object.keys(useContext(IndexContext).data).length > 0)
  const isNews = (Object.keys(useContext(NewsContext)).length > 0 &&
    Object.keys(useContext(NewsContext).data).length > 0)
  if (isIndex) {
    return sliderAdapter(useContext(IndexContext).data, locale)
  }
  if (isNews) {
    return sliderAdapter(useContext(NewsContext).data, locale)
  }
  const categoryIdStr = globalPropertyAdapter(globalProperties, 'categoryFeaturedEvents')
  return eventSliderAdapter(useContext(EventsContext).data, locale, categoryIdStr)
}

export default function Slider () {

  const slides = useExtractSlides()

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
        console.log("slide link", slide);
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
