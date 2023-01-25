import { SplideSlide } from '@splidejs/react-splide'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function SliderItem ({ id, imageUrl, imageAlternativeText, title, startTimestamp, speakers, link}) {
    const { t } = useTranslation()

    return ( 
        <SplideSlide className="splide__slide" key={`slide-${id}`}>
    <div
    className="w-full max-w-full mx-auto overflow-hidden shadow-md metropolis_medium bg-redD50">
    <div className="items-center justify-between md:flex">
        <div className="mx-auto mt-2 lg:mt-0">
        <img
            className="h-[50%] xs:h-2/4 mt-2 mb-2 mx-auto md:h-52 xl:h-48 w-[57%] xs:w-3/4 md:w-80 xl:w-80 md:ml-4 object-cover p-4"
            style={{
            marginRight: 'auto',
            marginLeft: 'auto',
            filter: 'drop-shadow(0 0 1.75rem white)',
            }}
            src={imageUrl}
            alt={imageAlternativeText}
            title={imageAlternativeText}
        />
        </div>
        <div className="w-full md:pl-14">
        <div
            className="pl-4 description pr-1 sm:pr-0 sm:pl-0 text-lg md:text-2xl xl:text-[32px] my-1 sm:my-4 text-gray-500 capitalize">
            {title}
            <br/>
            <h1
            className="text-lg md:text-2xl xl:text-[32px] text-gray-500 capitalize lg:pt-1">
            {startTimestamp}
            </h1>
        </div>
        <div
            className="items-end justify-between mb-4 lg:flex sm:items-center">
            <div className="pl-4 description pr-1 sm:pr-0 sm:pl-0">
            <h3
                className="text-SM leading-8 text-gray-500 capitalize online-event-p md:text-xl lg:text-lg xl:text-2xl">
                {speakers}
            </h3>
            </div>
            {link && (
            <div
            className="float-right text-[1.2rem] md:text-base lg:text-lg xl:text-2xl md:mb-4 bg-gray-100 sm:float-none md:float-right p-2 lg:p-3 xl:p-4 mb-11 sm:mb-0 ml-auto hover:bg-blue-200 cursor-pointer transation text-gray-500">
            {t('INFO')}:
                <Link href={link}>
                <a>{link}</a>
                </Link>
            </div>)}
        </div>
        </div>
    </div>
    </div>
    </SplideSlide>
    )
}