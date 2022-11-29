import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../lib/i18n'
import '../assets/css/styles.css'
import '../styles/globals.css'

import React, { createContext, useEffect } from 'react'
import Header from '../components/header/Header'
import { OurYagyaContextProvider } from '../context/OurYagyaContext'
import { fetchGlobalData } from '../lib/apiClient'
import { menuAdapter } from '../lib/menuAdapter'
import Footer from '../components/Footer/Footer'
import { titleAdapter } from '../lib/titleAdapter'
import i18n from 'i18next'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

export const GlobalContext = createContext({})

/**
 * Main entry point for the whole app.
 * @param Component
 * @param pageProps Contains global properties.
 * @returns {JSX.Element}
 * @constructor
 */
function OurYagya ({ Component, pageProps }) {
    const { global } = pageProps
    const locale = global.locale
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <GlobalContext.Provider value={global}>
            <OurYagyaContextProvider>
                <Head>
                    <title>{t('Our Yagya')}</title>
                </Head>
                <div className="relative metropolis_medium xl:container xl:mx-auto">
                <Header title={titleAdapter(pageProps)}/>
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </OurYagyaContextProvider>
        </GlobalContext.Provider>
    )
}

OurYagya.getInitialProps = async (ctxContainer) => {
    const { ctx, router } = ctxContainer
    const { locale } = router
    i18next.changeLanguage(locale);

    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctxContainer)
    const menuData = await fetchGlobalData(locale)
    const menuDict = menuAdapter(menuData)
    const { globalProperties } = menuData?.data
    const { footer, main, sustenance, pill_menu } = menuDict

    return {
        ...appProps,
        pageProps: {
            global: {
                mainMenu: main,
                sustenanceMenu: sustenance,
                footerMenu: footer,
                pillMenu: pill_menu,
                globalProperties,
                locale,
                baseUrl: ctx?.req?.headers.host
            },
        },
    }
}

export default appWithTranslation(OurYagya)
