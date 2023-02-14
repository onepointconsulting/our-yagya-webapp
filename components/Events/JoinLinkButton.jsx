import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const JoinLinkButton = ({
  event,
  parentStyle = 'flex items-center px-1 py-1 my-1 text-center rounded-lg bg-gold1',
  imageClass = 'w-4 xs:w-6 lg:w-7',
  registerButtonClass = 'pl-2 pr-2 m-auto mt-auto mb-auto text-xs text-center text-slate-200 cursor-text onlnie_eve_title lg:text-sm xl:text-[13px]',
}) => {

  const { t } = useTranslation()
  return <div
    className={`${parentStyle} ${
      event.joinLink
        ? 'bg-gold1 text-white'
        : 'bg-gray-300 text-slate-200 cursor-text'
    }`}
  >
    <div>
      <img
        className={imageClass}
        src="/img/icons8-pencil-64.png"
        alt={event.title}
        title={event.title}
      />
    </div>

    {!!event.joinLink ? (
      <Link href={event.joinLink} target="_blank">
        <div
          className={`${registerButtonClass} ${event.joinLink ? 'text-white' : 'text-white cursor-text'}`}
        >
          {t('Register')}
        </div>
      </Link>
    ) : (
      <div
        className={registerButtonClass}>
        {t('Register')}
      </div>
    )}
  </div>
}

export default JoinLinkButton