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

  return (
    <SplideSlide className="splide__slide" key={`slide-${id}`}>
      <div className="w-full max-w-full mx-auto overflow-hidden shadow-md metropolis_medium bg-redD50 cursor-pointer">

        <div className="items-center justify-between md:flex">
          <div className="mx-auto lg:mt-0 h-52 xl:h-60 w-auto xss:w-[55%] lg:w-96 relative">
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

          <div className="w-full md:pl-14 flex flex-col p-4 h-auto lg:h-52 xl:h-60">

            {/* Title and timestamp */}
            <Link href={`/single_event/${id}`}>
              <div className="description text-gray-500 capitalize">
                <h3 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl'>{title}</h3>
                <br/>
              </div>
            </Link>
            <Link href={`/single_event/${id}`}>
                <h1 className="text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
                  {startTimestamp}
                </h1>
            </Link>
            
            {/* speaker abd info link. */}
            <div className="items-end justify-between lg:flex sm:items-center">
              <div className="pl-4 description pt-4 lg:pt-1">
                <h3 className="text-SM leading-8 text-gray-500 capitalize online-event-p md:text-xl lg:text-lg xl:text-2xl">
                  {Array.isArray(speakers) && speakers?.join(', ') || speakers}
                </h3>
              </div>

              {/* Check if there is a link */}
              {link && <div className="float-right text-[1rem] md:text-base lg:text-lg xl:text-xl lg:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
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