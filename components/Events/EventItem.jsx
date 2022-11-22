import Link from 'next/link'
import { formateDate } from '../../lib/dateAdapter'

export const EventItem = ({ eve, locale }) => {
    return (
        <Link
            className="bg-green-500 cursor-pointer"
            href={`/single_event/${eve.id}`}
        >
            <a>
                <div className="h-auto p-4 overflow-y-auto metropolis_medium">
                    <div className="text-lg text-redfull md:text-2xl">
                        {eve.title}
                    </div>

                    <div className="pb-3">
                          <span className="text-sm text-gray-700 md:text-base">
                            {formateDate(
                                eve.date,
                                locale,
                                'dd LLLL yyyy  hh:mm a',
                            )} {eve.timezone}
                          </span>
                    </div>
                </div>
            </a>
        </Link>
    )
}