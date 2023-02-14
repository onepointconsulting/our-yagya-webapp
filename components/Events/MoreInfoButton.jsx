import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MoreInfoButton = ({
  event,
  mainClass = 'flex items-center px-1 py-1 my-1 rounded-lg bg-gold1',
  imgClass = 'w-4 xs:w-6 lg:w-7',
  moreInfoClass = 'm-auto mt-auto mb-auto text-xs xs:text-[12px] text-slate-50 onlnie_eve_title lg:text-sm xl:text-[13px] ml-3',
}) => {

  const { t } = useTranslation()

  return (
        <Link href={`/single_event/${event.id}`}>
    <div className={mainClass}>
      <div>
          <img
            className={imgClass}
            src="/img/icons8-info-50.png"
            alt={event.title}
            title={event.title}
          />
      </div>
        <div
          className={moreInfoClass}>
          {t('More Info')}
        </div>
    </div>
      </Link>
  )
}

export default MoreInfoButton