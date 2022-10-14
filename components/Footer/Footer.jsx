import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { globalPropertyAdapter } from '../../lib/globalPropertiesAdapter'

/**
 * Used to render the footer items from the Strapi menu
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {
  const { footerMenu, globalProperties } = useContext(GlobalContext)
  const { t } = useTranslation()

  return (
      <>
        <div className="metropolis_medium xl:container xl:mx-auto">
          <footer
              className="p-2 px-2 text-center text-slate-50 capitalize 2xl:flex 2xl:flex-wrap 2xl:justify-between filosofia_italic md:p-4 bg-grayfull w-full">
            <div><a href="#!" className="footer">{globalPropertyAdapter(globalProperties, 'copyright')}</a></div>
            <div>
              {!!footerMenu &&
                  footerMenu.map((footer, i) => {
                    return (
                        <span key={i}>
                          <Link
                                href={footer.attributes.url} >
                            <a className="footer">
                              {t(footer.attributes.title)}
                            </a>
                          </Link>
                          {i < footerMenu.length - 1 &&
                              <a className="px-2"> |</a>}
                        </span>
                    )
                  })}
            </div>
          </footer>
        </div>
      </>
  )
}

export default Footer