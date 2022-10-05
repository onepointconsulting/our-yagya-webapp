import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { GlobalContext } from '../pages/_app'

const MenuLink = ({ attributes, isLast }) => {
    const url = attributes.url
    return (
        <>
            {url.indexOf('/') === 0 ?
                <Link href={attributes.url}>
                    <a className="menu">{attributes.title}</a>
                </Link> :
                <a className="menu"
                   href={attributes.url}>{attributes.title}</a>}
            {!isLast && <a className="text-gray-100">|</a>}
        </>
    )
}

/**
 * Used to render the main menu.
 * @returns {JSX.Element}
 * @constructor
 */
const MainMenu = () => {
    const { t } = useTranslation()
    const { mainMenu } = useContext(GlobalContext)
    return (
        <>
            <div className="relative z-30 hidden lg:block">
                <div className="flex-row flex-wrap items-end w-full p-3 mx-auto
            text-center filosofia_regular bg-grayDark md:flex md:justify-around lg:justify-evenly">
                    {mainMenu.map((menu, i) => {
                        return (
                            <MenuLink key={i} attributes={menu.attributes} isLast={mainMenu.length - 1 === i }/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MainMenu
