import { singleEventAdapter } from '../../lib/eventsAdapter'
import { useTranslation } from 'react-i18next'
import { formateDate } from '../../lib/dateAdapter'
import { GlobalContext } from '../../pages/_app'
import { useContext } from 'react'
import Router from 'next/router'
import Link from '../../node_modules/next/link'
import { createGoogleCalendarLink} from '../../lib/googleCalendar'

const Venue = ({singleEvent}) => {
    return (
      <div className='p-2 text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl '>
        <p>
          {" "}
          {!!singleEvent?.venueName && <p>{singleEvent?.venueName}</p>}
        </p>
        <p>
          {singleEvent?.venueAddress}
        </p>
        {!!singleEvent?.venuePostalCode && (
          <p>
            {singleEvent?.venuePostalCode}
          </p>
        )}
        <p>
          {singleEvent?.venueLocality}
        </p>
      </div>
    );
}

const EventImage = ({singleEvent}) => {
    return (
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

                    <h3 className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl">
                        {singleEvent.sOnlineStatus?.includes("online") && t('Online')}
                        {singleEvent.sOnlineStatus?.includes("inhouse") && <Venue singleEvent={singleEvent} />}
                    </h3>
                </div>
            </div>
        </div>
    )
}

const AddToCalendar = ({singleEvent}) => {
    const { t } = useTranslation();

    const googleCalendarLink = createGoogleCalendarLink(singleEvent)

  return (
    <div className="my-2 lg:my-4 lg:p-4">
      <div className="flex items-center justify-around px-1 py-1 mx-2 my-4 cursor-pointer w-fit bg-gold1">
        <div className="ml-2 mr-3">
          <img
            className="object-cover w-4 h-auto md:w-full"
            src="/img/icons/icons8-plus-24.png"
            alt=""
            style={{ filter: " brightness(0) invert(1)" }}
          />
        </div>

        <div className="w-full">
          <h4 className="text-sm text-left capitalize text-slate-50 md:text-base lg:text-xl">
              <a href={googleCalendarLink} target="_blank">
            {t("Add to Google Calendar")}
              </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

const EventDate = ({singleEvent, locale}) => {
    const { t } = useTranslation()

    return (
        <div className="px-2 my-2 lg:my-4">
        <div className="flex items-start justify-between w-fit xl:p-2">
            <img className="object-cover mx-auto ml-auto imgColor w-9 h-9"
                src="https://ouryagya.netlify.app/img/svg/icons8-calendar-50.png"
                alt="card icon"
            />

            <div className="flex flex-col mx-2">
                <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                    {t('Date')}
                </h1>

                <h3 className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                    {formateDate(singleEvent.sStartDate,locale,'cccc, dd LLLL yyyy')}
                </h3>
            </div>
        </div>
    </div>
    )
}

const EventTime = ({singleEvent, locale}) => {
    const { t } = useTranslation()

    return (
        <div className="px-2 my-2 lg:my-4">
        <div className="flex items-start justify-between w-fit xl:p-2">
            <img className="object-cover mx-auto ml-auto imgColor w-9 h-9"
                src="https://ouryagya.netlify.app/img/svg/icons8-calendar-50.png"
                alt="card icon"
            />

            <div className="flex flex-col mx-2">
                <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                    {t('Local time')}{' '}
                </h1>

                <div className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                    <div  className="flex items-center justify-between w-full my-2">
                        {' '}
                        {t('Timezone')}:{' '}
                        <div className="ml-4 w-36 md:w-48 xl:w-60">
                            {singleEvent.sTimezone.name}
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-2">
                        {t('Date')}:{' '}
                        <div className="ml-4 w-36 md:w-48 xl:w-60">
                            {formateDate(singleEvent.sStartDate,locale,' dd LLLL yyyy')}
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-2">
                        {t('Time')}:{' '}
                        <div className="ml-4 w-36 md:w-48 xl:w-60">
                            {' '}
                            {formateDate(singleEvent.sStartDate, locale, 'hh:mm a',)} - {formateDate( singleEvent.sEndDate,locale, 'hh:mm a')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const EventDetails = ({singleEvent}) => {
    const { t } = useTranslation()

    return (
        <div className="px-2 my-2 lg:my-4">
        <div className="flex items-start justify-between w-fit xl:p-2">
          <img
            className="object-cover mx-auto ml-auto imgColor w-9 h-9"
            src="https://ouryagya.netlify.app/img/svg/icons8-playlist-50.png"
            alt="card icon"
          />

          <div className="flex flex-col mx-2">
            <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
              {t("Description")}{" "}
            </h1>

            <h3 className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
              {singleEvent.sEeventDescription}
            </h3>
            {singleEvent.joinLink && (
              <>
                <h1 className="text-lg text-left text-gold1 sm:text-xl md:text-2xl">
                  {t("Registration")}?{" "}
                </h1>
                <p className="text-sm leading-normal text-left text-gray-400 md:text-lg lg:text-xl ">
                  {t("Required")}
                  <br />
                <Link href={singleEvent.joinLink}>
                <a className="text-sm lg:text-base" target="_blank">
                    {singleEvent.joinLink}
                  </a>
                </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    )
}
const SingleEventMain = ({ data }) => {
    const { t } = useTranslation()
    const { locale } = useContext(GlobalContext)
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
          <div className="w-full mx-auto bg-slate-50 xl:w-10/12 bg-opacity-95">
            <EventImage singleEvent={singleEvent} />
            <div className="border border-gray-400">
              <div className="filosofia_italic bg-gold1">
                <h1 className="p-2 text-xl text-center md:p-4 text-slate-50 sm:text-2xl md:text-4xl lg:text-5xl lg:p-7">
                  {singleEvent.eventTitle}
                </h1>
              </div>

              <div className="px-2 my-2 lg:my-4">
                {/* <!-- date --> */}
                <EventDate singleEvent={singleEvent}  locale={locale}/>

                {/* <!-- Local time --> */}
                <EventTime singleEvent={singleEvent}  locale={locale}/>

                {/* <!-- Location --> */}
                <EventLocation singleEvent={singleEvent} />

                {/* <!-- details --> */}
                <EventDetails singleEvent={singleEvent} />

                {/* <!-- add to calendar --> */}
                <AddToCalendar singleEvent={singleEvent}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SingleEventMain
