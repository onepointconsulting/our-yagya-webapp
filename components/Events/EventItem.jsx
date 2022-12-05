import Link from 'next/link'
import { formateDate } from '../../lib/dateAdapter'

export const EventItem = ({ event, locale }) => {
    return (
        <Link
            className="bg-green-500 cursor-pointer"
            href={`/single_event/${event.id}`}
        >
            <a>
                <div className="h-auto p-4 overflow-y-auto metropolis_medium">
                    <div className="text-lg text-redfull md:text-2xl">
                        {event.title}
                    </div>

                    <div className="pb-3">
                          <span className="text-sm text-gray-700 md:text-base">
                            {formateDate(
                                event.date || event.startDate,
                                locale,
                                'dd LLLL yyyy  hh:mm a',
                            )} {event.timezone}
                          </span>
                    </div>
                </div>
            </a>
        </Link>
    )
}