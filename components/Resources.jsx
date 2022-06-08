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
                    <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" href="/">
                        {t('blessings')}
                    </a>
                    <a className="text-home_page_center_nav_text">|</a>

                    <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" href="/latest_classes.html">

                        {t('photos & images')}

                    </a>
                    <a className="text-home_page_center_nav_text">|</a>

                    <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" href="/">
                        {t('audio ebooks')}

                    </a>
                    <a className="text-home_page_center_nav_text">|</a>

                    <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" href="/events.html">

                        {t('books')}

                    </a>
                    <a className="text-home_page_center_nav_text">|</a>

                    <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" href="/">

                        {t('music')}

                    </a>
                    <a className="text-home_page_center_nav_text">|</a>
                    <a className="text-home_page_center_nav_text px-2 text-sm lg:text-3xl xl:text-4xl  whitespace-nowrap" href="/">
                        {t('login for more >>')}

                    </a>
                </div>
            </div>
        </div>
    )
}

export default Recources