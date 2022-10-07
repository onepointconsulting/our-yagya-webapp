import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../lib/i18n'
import '../assets/css/styles.css'
import '../styles/globals.css'

import { createContext } from 'react'
import Header from '../components/Header/Header'
// import Footer from "../components/Footer";
import { OurYagyaContextProvider } from '../context/OurYagyaContext'
import { fetchMenusData } from '../lib/apiClient'
import { menuAdapter } from '../lib/menuAdapter'
import Home from '../components/Home'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer'

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
                <div
                    className="relative metropolis_medium xl:container xl:mx-auto">
                    <Header/>
                    <div className="bg-green-500 h-screen">
                        <Component {...pageProps} />
                        <Footer/>
                    </div>
                </div>
            </OurYagyaContextProvider>
        </GlobalContext.Provider>
    )
}

OurYagya.getInitialProps = async (ctxContainer) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctxContainer)

    const menuData = await fetchMenusData()

    const menuDict = menuAdapter(menuData)

    console.log('menuDict', menuDict)

    const { footer, main, sustenance, pill_menu } = menuDict

    // Links data
    const linksData = []

    return {
        ...appProps,
        pageProps: {
            global: {
                mainMenu: main,
                sustenanceMenu: sustenance,
                footerMenu: footer,
                pillMenu: pill_menu,
            },
        },
    }
}

export default appWithTranslation(OurYagya)
