import React, { useContext } from 'react'
import { formateDate } from '../../lib/dateAdapter'
import Link from '../../node_modules/next/link'
import { GlobalContext } from '../../pages/_app'
import MoreInfoButton from './MoreInfoButton'
import JoinLinkButton from './JoinLinkButton'

const MoreInfoAndRegister = ({ event }) => {

  return (
    <>
      {/* more info and registeration */}
      <div className="w-20 xs:w-24 xl:w-36">
        <MoreInfoButton event={event} />
        <JoinLinkButton event={event} />
      </div>
    </>
  )
}

const FeaturedEventImage = ({ event }) => {
  return (
    <>
      <div className="relative w-24 h-20 md:w-44 md:h-28">
        <img
          className="object-cover absolute w-full h-full"
          src={event.imageUrl}
          alt={event.alternativeText}
          title={event.alternativeText}
        />
      </div>
    </>
  )
}

const FeaturedEventItem = ({ event }) => {
  const { locale } = useContext(GlobalContext)

  if (event?.imageUrl?.length === 0) {
    return []
  }
//   console.log("eventid",event);

  return (
    <>
      <div className="flex transparency">
        <div className="cursor-pointer w-full my-1 ">
          <div className="flex items-center justify-between">
            <Link href={`/single_event/${event.id}`}>
              <div
                className="flex items-center w-auto md:w-4/5 lg:w-5/6 xl:w-5/6">
                {/* <!-- image --> */}

                <FeaturedEventImage event={event}/>

                {/* title and date */}
                <div
                  className="w-[40vw] md:w-[72%] lg:w-full pl-2 md:pl-4 lg:pl-8">
                  <h1
                    className="font-medium leading-4 text-red-400 text-lg text-redfull md:text-2xl whitespace-nowrap lg:whitespace-normal overflow-hidden lg:overflow-auto text-ellipsis">
                    {event.title}
                  </h1>

                  <div className="items-center justify-between w-full md:flex">
                    <div>
                      <p
                        className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(
                          event.startDateTime,
                          locale,
                          'dd LLLL yyyy',
                        )}
                      </p>
                    </div>

                    <div>
                      <p
                        className="leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(
                          event.startDateTime,
                          locale,
                          'hh:mm a ZZZZ',
                        )}{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <MoreInfoAndRegister event={event}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedEventItem
