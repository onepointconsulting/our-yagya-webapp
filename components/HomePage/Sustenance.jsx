import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { GlobalContext } from '../../pages/_app'

const SustenanceLink = ({ treasures }) => {

    return (
        <>
            <div className='flex items-center justify-center mx-2 my-3 text-2xl lg:text-3xl xl:text-3xl rounded-[30px] text-center bg-gold1 text-white py-6 px-2 h-[7vh] w-64' style={{ lineHeight: "2rem" }}>
                <Link href={treasures.attributes.url}>
                    {treasures.attributes.title}
                </Link>
            </div>
        </>
    )
}

export default function Sustenance() {
    const { t } = useTranslation()
    const { sustenanceMenu } = useContext(GlobalContext)

    return (
        <>
            <div className="p-[.75rem] text-center bg-red70">
                <h1 className="text-6xl text-white filosofia_italic">
                    {t('Treasures')}
                </h1>
            </div>

            <div className="p-4 filosofia_italic bg-red50">
                <div
                    className="flex items-center justify-center flex-wrap w-full mx-auto text-center md:flex">
                    {!!sustenanceMenu &&
                        sustenanceMenu.map((treasures, i) => {
                            return (<SustenanceLink treasures={treasures} key={`treasures_${i}`} />)
                        })}
                </div>
            </div>
        </>
    )
}
