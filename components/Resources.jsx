import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Recources = () => {

    const { t } = useTranslation()


    return (
        <div>
            <div className="bg-home_resource text-center p-2">
                <h1 className="filosofia_regular text-2xl md:text-4xl text-white">resources</h1>
            </div>

            <div className="filosofia_regular bg-home_page_center_meniu p-2  hidden md:block">
                <div className="flex-wrap md:flex flex-row items-end md:justify-around lg:justify-evenly text-center mx-auto w-full">
                    <Link href="/events">
                        <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" >
                            {t('blessings')}
                        </a>


                    </Link>
                    <a className="text-home_page_center_nav_text">|</a>

                    <Link href="/">
                        <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap">

                            {t('photos & images')}

                        </a>

                    </Link>

                    <a className="text-home_page_center_nav_text">|</a>

                    <Link href="/">
                        <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" >
                            {t('audio ebooks')}

                        </a>


                    </Link>
                    <a className="text-home_page_center_nav_text">|</a>

                    <Link href="/">

                        <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap">

                            {t('books')}

                        </a>
                    </Link>
                    <a className="text-home_page_center_nav_text">|</a>

                    <Link href="/">

                        <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" >

                            {t('music')}

                        </a>
                    </Link>
                    <a className="text-home_page_center_nav_text">|</a>
                    <Link href="/">


                        <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" >
                            {t('login for more >>')}

                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recources