import Link from "next/link";
import { formateDate } from "../../lib/dateAdapter";

export const EventItem = ({ event, locale }) => {

  return (
    <Link
      className="bg-green-500 cursor-pointer"
      href={`/single_event/${event.id}`}
    >
      <a>
        <div className="h-auto p-4 overflow-y-auto metropolis_medium">
          <div className="text-lg text-redfull md:text-2xl">{event.title}</div>

          <div>
          <span className="text-sm text-gray-700 md:text-base">
              {formateDate(event.localizedDate, locale, "dd LLLL yyyy")}
              {' '}
              {formateDate(event.localizedDate, locale, "hh:mm a ZZZZ")}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
