import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const StickyMenu = () => {
    const { t } = useTranslation()


    return (
        // <!-- gmenu with gray backgorund -->
        <div className="sticky top-0 z-10 hidden lg:block">
            <div className="filosofia_regular bg-grayDark flex-wrap md:flex flex-row items-center md:justify-around p-2 lg:justify-evenly text-center mx-auto w-full"
                style={{ zIndex: '-6' }}>
                <Link href="/">
                    <a className="px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap text-white">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </a>

                </Link>
                <Link href="/">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t('  Today &apos; s murli')}

                    </a>
                </Link>

                <a className="text-gray-100">|</a>

                <Link href="/events">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" >

                        {t('events')}
                    </a>
                </Link>
                <a className="text-gray-100">|</a>

                <Link href="/classes">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t(' classes & talks')}
                    </a>
                </Link>


                <a className="text-gray-100">|</a>

                <Link href="/news">

                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">
                        {t('news')}
                    </a>
                </Link>

                <a className="text-gray-100">|</a>

                <Link href="/resources">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t('resources')}
                    </a>
                </Link>


                <a className="text-gray-100">|</a>

                <Link href="/links">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t('links directory')}
                    </a>
                </Link>


                <a className="text-gray-100">|</a>

                <Link href="/links">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t('more')}
                    </a>
                </Link>


                <Link href="/links">
                    <a className="text-gray-100 px-2 whitespace-nowrap">
                        <i className="fal fa-chevron-right"></i>
                    </a>
                </Link>
            </div>


            <div className="hidden"
                style={{ zIndex: '-6' }}>

                <Link href="/Today">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t('Today&apos;s murli')}
                    </a>
                </Link>

                <a className="text-gray-100">|</a>

                <Link href="/events">

                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t(' Today&apos;s murli quiz')}
                    </a>
                </Link>
                <a className="text-gray-100">|</a>
                <Link href="/classes">

                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t(' avyakt murlis')}
                    </a>
                </Link>

                <a className="text-gray-100">|</a>
                <Link href="/news">


                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap">

                        {t('monthlt avyakt signals')}
                    </a>
                </Link>

                <a className="text-gray-100">|</a>

                <Link href="/resources">
                    <a className="text-gray-100 px-2 text-sm lg:text-2xl xl:text-3xl whitespace-nowrap" >

                        {t('murli search')}
                    </a>
                </Link>
            </div>
        </div>

    )
}

export default StickyMenu