import App from "next/app";
import { appWithTranslation } from "next-i18next";
import "../lib/i18n";
import "../assets/css/styles.css";
import "../styles/globals.css";

import { createContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { OurYagyaContextProvider } from "../context/OurYagyaContext";
import {
  fetchFooterFata,
  fetchLinksData,
  fetchMenusData,
} from "../lib/apiClient";

export const GlobalContext = createContext({});

/**
 * Main entry point for the whole app.
 * @param Component
 * @param pageProps Contains global properties.
 * @returns {JSX.Element}
 * @constructor
 */
function OurYagya({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <GlobalContext.Provider value={global}>
      <OurYagyaContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </OurYagyaContextProvider>
    </GlobalContext.Provider>
  );
}

OurYagya.getInitialProps = async (ctxContainer) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctxContainer);
  const footerData = await fetchFooterFata();
  const menuData = await fetchMenusData();

  // Links data
  const linksData = await fetchLinksData();

  return {
    ...appProps,
    pageProps: {
      global: {
        footerData: footerData["data"]["footers"]["data"],
        menuData: menuData["data"]["menus"]["data"],
        linksData: linksData["data"]["links"]["data"],
      },
    },
  };
};

export default appWithTranslation(OurYagya);
