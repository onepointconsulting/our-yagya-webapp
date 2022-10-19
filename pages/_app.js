import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../lib/i18n'
import '../assets/css/styles.css'
import '../styles/globals.css'

import React, { createContext } from 'react'
import Header from '../components/Header/Header'
import { OurYagyaContextProvider } from '../context/OurYagyaContext'
import { fetchGlobalData, fetchSlider } from '../lib/apiClient'
import { menuAdapter } from '../lib/menuAdapter'
import BackToTop from '../components/Footer/BackToTop'
import Footer from '../components/Footer/Footer'
import { titleAdapter } from '../lib/titleAdapter'

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
    return (
        <GlobalContext.Provider value={global}>
            <OurYagyaContextProvider>
                <div className="relative metropolis_medium xl:container xl:mx-auto">
                    <Header title={titleAdapter(pageProps)}/>
                    <Component {...pageProps} />
                    <div className="absolute bottom-16 right-1">
                        <BackToTop />
                    </div>
                    <Footer />
                </div>
            </OurYagyaContextProvider>
        </GlobalContext.Provider>
    )
}

OurYagya.getInitialProps = async (ctxContainer) => {

    const { router } = ctxContainer
    const { locale } = router

    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctxContainer)
    const menuData = await fetchGlobalData(locale)
    const fetchSlider1 = await fetchSlider(locale)
    const menuDict = menuAdapter(menuData)
    const { globalProperties } = menuData?.data
    const { footer, main, sustenance, pill_menu } = menuDict
    console.log("fetchSlider", fetchSlider1)
    return {
        ...appProps,
        pageProps: {
            global: {
                mainMenu: main,
                sustenanceMenu: sustenance,
                footerMenu: footer,
                pillMenu: pill_menu,
                globalProperties,
                fetchSlider1
            },
        },
    }
}

export default appWithTranslation(OurYagya)
