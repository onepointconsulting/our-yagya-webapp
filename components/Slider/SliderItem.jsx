import { SplideSlide } from '@splidejs/react-splide'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { shortenUrl } from '../../lib/urlAdapter'

export default function SliderItem ({
  id,
  imageUrl,
  imageAlternativeText,
  title,
  startTimestamp,
  speakers,
  link,
}) {
  const { t } = useTranslation()

  console.log("startTimestamp", startTimestamp)

  return (
    <SplideSlide className="splide__slide" key={`slide-${id}`}>
      <div
        className="w-full max-w-full mx-auto overflow-hidden shadow-md metropolis_medium bg-redD50 cursor-pointer">

        <div className="items-center justify-between md:flex">
          <div className="mx-auto lg:mt-0 h-52 xl:h-56 w-3/4 md:w-96 relative">
            <Link href={`/single_event/${id}`}>
              <img
                className="mx-auto md:ml-4 object-cover p-4 absolute w-full h-full"
                style={{
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  filter: 'drop-shadow(0 0 1.75rem white)',
                }}
                src={imageUrl}
                alt={imageAlternativeText}
                title={imageAlternativeText}
              />
            </Link>
          </div>
          <div className="w-full md:pl-14 flex flex-col p-4">
            <Link href={`/single_event/${id}`}>
              <div className="pl-4 description pr-1 sm:pr-0 sm:pl-0 text-gray-500 capitalize">
                <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl'>{title}</h3>
                <br/>
                <h1
                  className="text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
                  {startTimestamp}
                </h1>
              </div>
            </Link>
            <div
              className="items-end justify-between lg:mb-4 lg:flex sm:items-center">
              <div className="pl-4 description pr-1 pt-4 lg:pt-1 sm:pr-0 sm:pl-0">
                <h3
                  className="text-SM leading-8 text-gray-500 capitalize online-event-p md:text-xl lg:text-lg xl:text-2xl">
                  {Array.isArray(speakers) && speakers?.join(', ') || speakers}
                </h3>
              </div>
              {link && <div
                className="float-right text-[1.2rem] md:text-base lg:text-lg xl:text-2xl lg:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
                {t('INFO')}:
                <Link href={link || ''} target="_blank">
                  <a>{' '}{shortenUrl(link)}</a>
                </Link>
              </div>
              }
            </div>
          </div>
        </div>


      </div>
    </SplideSlide>
  )
}