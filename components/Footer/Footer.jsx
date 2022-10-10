import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'

/**
 * Used to render the footer items from the Strapi menu
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {
  const { footerMenu } = useContext(GlobalContext)
  const { t } = useTranslation()

  return (
      <>
        <div className="absolute bottom-16 right-1">
          <div id="btn-back-to-top"
               className="absolute lg:sticky z-10 flex items-center justify-center p-2 px-2 border-2 border-red-600 rounded-full cursor-pointer lg:mb-2 right-2 md:right-4 lg:h-[2.5rem] lg:w-[2.5rem] ml-auto mr-4 bottom-auto bg-slate-50">
            <img className=" h-auto md:h-6 w-[14px] md:w-6"
                 src="../img/icons/backto_top.png" alt=""/></div>
        </div>
        <div className="metropolis_medium xl:container xl:mx-auto">
          <footer
              className=" p-2 px-2 text-center text-slate-50 capitalize 2xl:flex 2xl:flex-wrap 2xl:justify-between filosofia_italic md:p-4 bg-grayfull absolute bottom-0 w-full">
            <div><a href="#!" className="footer">our
              Yagya <span>@</span>2022</a><a href="#!" className="ml-4 footer">all rights reserved.</a></div>
            <div>
              {!!footerMenu &&
                  footerMenu.map((footer, i) => {
                    return (
                        <>
                          <Link key={i}
                                href={footer.attributes.url}>
                            <a className="footer">
                              {t(footer.attributes.title)}
                            </a>
                          </Link>
                          {i < footerMenu.length - 1 &&
                              <a className="px-2"> |</a>}
                        </>
                    )
                  })}
            </div>
          </footer>
        </div>
      </>
  )
}

export default Footer