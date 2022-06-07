import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '../assets/css/styles.css'
import { createContext } from 'react'

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
        <GlobalContext.Provider
            value={global}><Component {...pageProps} />
        </GlobalContext.Provider>
    )
}

OurYagya.getInitialProps = async (ctxContainer) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctxContainer)
    return { ...appProps, pageProps: { global: {} } }
}

export default appWithTranslation(OurYagya)
