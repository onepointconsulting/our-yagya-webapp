import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../lib/i18n'
import '../assets/css/styles.css'
import '../assets/css/fullCalendar.css'
import '../assets/css/customStyle.css'
import '../styles/globals.css'

import React, { createContext, useEffect } from 'react'
import Header from '../components/HeaderGeneral/Header'
import { OurYagyaContextProvider } from '../context/OurYagyaContext'
import { fetchGlobalData } from '../lib/apiClient'
import { menuAdapter } from '../lib/menuAdapter'
import Footer from '../components/Footer/Footer'
import { titleAdapter } from '../lib/titleAdapter'
import i18n from 'i18next'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import Script from 'next/script'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import MainMenu from '../components/HeaderGeneral/MainMenu'
import StickyButton from '../components/Stickies/StickyButtons'
import StickyButtonMobile from '../components/Stickies/StickyButtonsMobile'

export const GlobalContext = createContext({})
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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
  const { t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  const pageTitle = titleAdapter(pageProps) ?? t('Our Yagya')

  const queryClient = new QueryClient()

  return (
    <GlobalContext.Provider value={global}>
      <OurYagyaContextProvider>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Script id="show-banner" strategy="afterInteractive">
          {`window.history.scrollRestoration = 'manual'`}
        </Script>
        <div
          className="relative flex flex-col min-h-screen metropolis_medium xl:container xl:mx-auto">
          <div className="sticky z-50 ml-auto top-24 md:top-36 w-fit">

            <StickyButton/>
          </div>

          <Header title={pageTitle}/>
          <div className="sticky top-0 z-50 hidden lg:block">
            <MainMenu/>
          </div>

          <div className="flex-1">
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>
          </div>

          <div className="sticky z-50 bottom-14">
            <StickyButtonMobile/>
          </div>

          <Footer/>
        </div>
      </OurYagyaContextProvider>
    </GlobalContext.Provider>

  )
}

OurYagya.getInitialProps = async (ctxContainer) => {
  const { ctx, router } = ctxContainer
  const { locale } = router
  i18next.changeLanguage(locale)

  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctxContainer)
  const menuData = await fetchGlobalData(locale)
  const menuDict = menuAdapter(menuData)
  const { globalProperties } = menuData?.data
  const { footer, main, treasures, pill_menu } = menuDict

  return {
    ...appProps,
    pageProps: {
      global: {
        mainMenu: main,
        sustenanceMenu: treasures,
        footerMenu: footer,
        pillMenu: pill_menu,
        globalProperties,
        locale,
        baseUrl: ctx?.req?.headers.host,
      },
    },
  }
}

export default appWithTranslation(OurYagya)
