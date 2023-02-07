import Link from "next/link";
import { formateDateToLocal } from "../../lib/dateAdapter";
import { useEffect, useState } from 'react'

export const EventItem = ({ event, locale }) => {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    setDate(formateDateToLocal(
      event.startDate ?? event.startDateTime,
      locale,
      event.timezone,
      "dd LLLL yyyy"
    ))
    setTime(formateDateToLocal(
      event.startDate ?? event.startDateTime,
      locale,
      event.timezone,
      "hh:mm a ZZZZ"
    ))
  }, [])

  return (
    <Link
      className="bg-green-500 cursor-pointer"
      href={`/single_event/${event.id}`}
    >
      <a>
        <div className="h-auto p-4 metropolis_medium">
          <div className="text-lg text-redfull md:text-2xl">{event.title}</div>

          <div>
            <span className="text-sm text-gray-700 md:text-base">
              {date}{" "}{time}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
