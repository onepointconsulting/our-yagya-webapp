import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../pages/_app'

const footerAdapter = (footerData) => {
    return footerData.map(fd => {
        const items = fd['attributes']['items']
        return {
            title: items.title,
            link: items.link,
        }
    })
}

const Footer = () => {
    const { footerData } = useContext(GlobalContext)
    console.info('footerData', JSON.stringify(footerData))
    const { t } = useTranslation()

    const footers = footerAdapter(footerData)
    console.log('footerData', footerData)

    return (
        // <!-- Footer -->
        <footer
            className="filosofia_italic  flex flex-wrap xl:flex-row items-center  justify-center md:justify-between p-2 md:p-4 px-2 bg-grayfull text-white text-center">
            <div className="hidden md:block md:pl-4 lg:pl-8">
                <Link href="/">
                    <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
                        {' '}
                        {t('Our Yagya')} <span>@</span>2022
                    </a>
                </Link>
            </div>

            <div className="md:pr-4 lg:pr-8">
                {!!footers && footers.map((footer, i) => {
                    return (
                        <>
                            <Link key={i} href={footer.link}>
                                <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
                                    {t(footer.title)}
                                </a>
                            </Link>
                            {i < footers.length - 1 && (<a className="px-2"> |</a>)}
                        </>
                    )
                })}
            </div>

            <div className="md:hidden md:md:pl-4 lg:pl-8">
                <Link href="/">
                    <a className="capitalize text-[19px] md:text-lg lg:text-2xl xl:text-3xl">
                        {' '}
                        {t('Our Yagya')} <span>@</span>2022
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
