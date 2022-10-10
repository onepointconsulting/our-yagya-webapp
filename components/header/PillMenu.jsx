import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../../pages/_app'
import { useTranslation } from 'react-i18next'


const PillMenuContent = ({ title, url, children }) => {
    const { t } = useTranslation();
    if (!!children) {
        return (
            <>
                <div
                    className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
                    <select
                        className="duration-100 outline-none cursor-pointer">
                        {children.map((child, i) => {
                            return (
                                <option
                                    key={`language${i}`}>{t(child.attributes.title)}</option>
                            )
                        })}
                    </select>
                </div>
            </>
        )
    }

    return (
        <Link href={url}>
            <a className="py-[11px] px-2 lg:px-1 text-[15px] xl:text-[15px] 2xl:text-[18px]">
                {title}
            </a>
        </Link>
    )
}

/**
 * buttons menu in higher screen
 * @returns {{}}
 * @constructor
 */
const PillMenuItem = ({ attributes }) => {

    const url = attributes.url
    const icon = attributes.icon.data?.attributes?.url
    const title = attributes.title
    const children = attributes.children

    return (
        <>
            {url.indexOf('/') === 0 ? (
                <div
                    className="w-full flex items-center justify-between h-[2.4rem] p-[9px] 2xl:p-4 px-[9px] m-[3px] duration-100 bg-[#ffffff] border-2 rounded-full cursor-pointer text-red-600 border-red-600">
                    <PillMenuContent title={title} children={children}
                                     url={url}/>
                    {icon && <img
                        src={icon}
                        alt={title}
                        className="w-auto h-[1.5rem]"
                    />}
                </div>
            ) : (
                <a className="menu">{attributes.title}</a>
            )}
        </>
    )
}

const PillMenu = () => {
    const { pillMenu } = useContext(GlobalContext)

    return (
        <div
            className="hidden metropolis_medium lg:flex flex-col items-center mr-4 mt-4">
            <>
                {pillMenu?.map((pill, i) => {
                    return <PillMenuItem key={i} attributes={pill.attributes}/>
                })}
            </>
        </div>
    )
}

export default PillMenu
