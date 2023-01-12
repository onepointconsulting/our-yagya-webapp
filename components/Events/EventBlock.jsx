import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { EventItem } from './EventItem'
import useArrowHook from '../../hooks/useArrowHook'
import FeaturedEventItem from './FeaturedEventItem'

const ArrowIcon = ({ start, setStart, arrowDirection, isEnd }) => {
  const [t, iconUrl, step, isOnTop, isTheEnd] = useArrowHook(
    arrowDirection,
    start,
    isEnd,
  )

  const onClick = (e) => {
    e.preventDefault()
    if (
      (arrowDirection === 'up' && start !== 0) ||
      (arrowDirection === 'down' && !isEnd)
    ) {
      setStart(start + step)
    }
  }

  return (
    <div className="">
      {!isOnTop && !isTheEnd && (
        <h1
          className="flex justify-center py-4 text-5xl text-center text-gray-400 cursor-poainter">
          <a href="#" onClick={onClick}>
            <img className="w-8 xs:w-10" src={iconUrl} alt={t('more')}/>
          </a>
        </h1>
      )}
    </div>
  )
}

/**
 * Loops through events in category
 */
const EventBlock = ({ events, category }) => {
  const { locale } = useContext(GlobalContext)

  return (
    <div
      className="relative w-full bg-gray50 h-[23rem] md:h-[25rem] 2xl:h-[24rem]">
      <>
        <div
          className="py-2 pl-4 pr-2 text-[1.2rem] text-white capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
          {category}
        </div>
      </>

      {!!events && 
        events?.map((event, i) => {
          if (category === 'Featured Events')
            return <FeaturedEventItem locale={locale} event={event} key={i}/>
          else return <EventItem locale={locale} event={event} key={i}/>
        })}

      <div className="absolute inset-x-0 bottom-0  lg:bottom-[1rem]">
        <ArrowIcon
          start={0}
          setStart={() => {}}
          arrowDirection="down"
          isEnd={false}
        />
      </div>
    </div>
  )
}

export default EventBlock
