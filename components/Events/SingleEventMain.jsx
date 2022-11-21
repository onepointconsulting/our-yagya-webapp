import { singleEventAdapter } from '../../lib/eventsAdapter'
import { useTranslation } from 'react-i18next'
import { formateDate } from '../../lib/dateAdapter'
import { GlobalContext } from '../../pages/_app'
import { useContext } from 'react'
import Router from 'next/router'
import { convertIsoToGoogleCal } from '../../lib/googleCalendar'

const Venue = ({singleEvent}) => {
    return (
        <>
            <br />
            {!!singleEvent?.name && <p>{singleEvent?.name}</p>}
            <p>{singleEvent?.address}</p>
            {!!singleEvent?.postCode && <p>{singleEvent?.postCode}</p>}
            <p>{singleEvent?.locality}</p>
        </>
    )
}

const EventLocation = ({ singleEvent }) => {
    const { t } = useTranslation()
    return (
        <div className="px-2 my-2 lg:my-4">
            <div className="flex items-start justify-between w-fit xl:p-2">
                <img
                    className="object-cover mx-auto ml-auto imgColor w-9 h-9"
                    src="https://ouryagya.netlify.app/img/svg/icons8-location-24.png"
                    alt="card icon"
                />

                <div className="flex flex-col mx-2">
                    <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                        {t('Location')}{' '}
                    </h1>

                    <h3 className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                        {singleEvent.sOnlineStatus?.includes("online") && t('Online')}
                        {singleEvent.sOnlineStatus?.includes("inhouse") && <Venue singleEvent={singleEvent} />}
                    </h3>
                </div>
            </div>
        </div>
    )
}

const SingleEventMain = ({ data }) => {
    const { t } = useTranslation()
    const { locale } = useContext(GlobalContext)
    convertIsoToGoogleCal()
    const singleEvent = singleEventAdapter(data)

    if (!singleEvent) {
        return (
            <div
                className="flex items-center justify-center h-screen p-4 text-center bg-red-500">
                <h3 className="text-base md:text-lg lg:text-5xl text-slate-50">
                    {' '}
                    {t('Sorry, we could not find the event you looking for.')}
                </h3>
            </div>
        )
    }
    return (
        <>
            <div className="w-full px-4 py-4 md:px-8 lg:px-20 md:py-8 lg:py-20">
                <div
                    className="w-full mx-auto bg-slate-50 xl:w-3/5 bg-opacity-95">
                    <div className="relative w-full h-full">
                        <div className="flex jsutify-between">
                            <img
                                onClick={() => Router.back()}
                                className="w-8 md:w-12 h-8 md:h-12 absolute right-[-14px] md:right-[-24px] top-[-9px] md:top-[-22px] cursor-pointer hover:bg-red-400 transition-all duration-150 p-2 rounded-full bg-slate-50  border border-gray-600 mx-auto object-cover"
                                src="https://ouryagya.netlify.app/img/svg/icons8-close-50.png"
                                alt=""
                            />

                            <img
                                className="object-cover w-full h-full mx-auto"
                                src={singleEvent.sEventImage}
                                alt={singleEvent.sAlternativeText}
                                title={singleEvent.sAlternativeText}
                            />
                        </div>
                    </div>

                    <div className="border border-gray-400">
                        <div className="filosofia_italic bg-gold1">
                            <h1 className="p-2 text-xl text-center md:p-4 text-slate-50 sm:text-2xl md:text-4xl lg:text-5xl lg:p-7">
                                {singleEvent.eventTitle}
                            </h1>
                        </div>

                        <div className="px-2 my-2 lg:my-4">
                            {/* <!-- date --> */}
                            <div className="px-2 my-2 lg:my-4">
                                <div
                                    className="flex items-start justify-between w-fit xl:p-2">
                                    <img
                                        className="object-cover mx-auto ml-auto imgColor w-9 h-9"
                                        src="https://ouryagya.netlify.app/img/svg/icons8-calendar-50.png"
                                        alt="card icon"
                                    />

                                    <div className="flex flex-col mx-2">
                                        <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                                            {t('Date')}
                                        </h1>

                                        <h3 className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                                            {/* Not clear */}
                                            {formateDate(
                                                singleEvent.sStartDate,
                                                locale,
                                                'cccc, dd LLLL yyyy',
                                            )}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Local time --> */}
                            <div className="px-2 my-2 lg:my-4">
                                <div
                                    className="flex items-start justify-between w-fit xl:p-2">
                                    <img
                                        className="object-cover mx-auto ml-auto imgColor w-9 h-9"
                                        src="https://ouryagya.netlify.app/img/svg/icons8-calendar-50.png"
                                        alt="card icon"
                                    />

                                    <div className="flex flex-col mx-2">
                                        <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                                            {t('Local time')}{' '}
                                        </h1>

                                        <div
                                            className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                                            <div
                                                className="flex items-center justify-between w-full">
                                                {' '}
                                                {t('Timezone')}:{' '}
                                                <div
                                                    className="ml-4 w-36 md:w-48 xl:w-60">
                                                    {singleEvent.sTimezone.name}
                                                </div>
                                            </div>
                                            <br/>
                                            <div
                                                className="flex items-center justify-between w-full">
                                                {t('Date')}:{' '}
                                                <div
                                                    className="ml-4 w-36 md:w-48 xl:w-60">
                                                    {formateDate(
                                                        singleEvent.sStartDate,
                                                        locale,
                                                        ' dd LLLL yyyy',
                                                    )}
                                                </div>
                                            </div>
                                            <br/>
                                            <div
                                                className="flex items-center justify-between w-full">
                                                {t('Time')}:{' '}
                                                <div
                                                    className="ml-4 w-36 md:w-48 xl:w-60">
                                                    {' '}
                                                    {formateDate(
                                                        singleEvent.sStartDate,
                                                        locale,
                                                        'hh:mm a',
                                                    )}{' '}
                                                    -{' '}
                                                    {formateDate(
                                                        singleEvent.sEndDate,
                                                        locale, 'hh:mm a')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Location --> */}
                            <EventLocation singleEvent={singleEvent}/>

                            {/* <!-- details --> */}
                            <div className="px-2 my-2 lg:my-4">
                                <div
                                    className="flex items-start justify-between w-fit xl:p-2">
                                    <img
                                        className="object-cover mx-auto ml-auto imgColor w-9 h-9"
                                        src="https://ouryagya.netlify.app/img/svg/icons8-playlist-50.png"
                                        alt="card icon"
                                    />

                                    <div className="flex flex-col mx-2">
                                        <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                                            {t('Description')}{' '}
                                        </h1>

                                        <h3 className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                                            {singleEvent.sEeventDescription}
                                        </h3>
                                        {singleEvent.joinLink && (
                                            <>
                                                <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                                                    {t('Registration')}?{' '}
                                                </h1>
                                                <p className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                                                    {t('Required')}
                                                    <br/>
                                                    <a className="font-bold"
                                                       href="#!">
                                                        {singleEvent.joinLink}
                                                    </a>
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="my-2 lg:my-4 lg:p-4">
                                <div
                                    className="flex items-center justify-around px-1 py-1 mx-2 my-4 cursor-pointer w-fit bg-gold1">
                                    <div className="ml-2 mr-3">
                                        <img
                                            className="object-cover w-4 h-auto md:w-full"
                                            src="/img/icons/icons8-plus-24.png"
                                            alt=""
                                            style={{ filter: ' brightness(0) invert(1)' }}
                                        />
                                    </div>

                                    <div className="w-full">
                                        <h4 className="text-sm text-left capitalize text-slate-50 md:text-base lg:text-xl">
                                            add to Google calendar
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEventMain
