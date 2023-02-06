import { useContext } from "react";
import {
  CalendarContext,
  CALENDAR_ACTIONS,
} from "../../../context/CalendarContext";
const Filter = () => {
  const { calendarData, dispatchCalendarData } = useContext(CalendarContext);

  return (
    <>
      <div className="flex justify-between my-4 metropolis_medium bg-filter-bg ">
        <div className="relative  flex flex-col">
          <div className="px-4 py-4 text-base md:text-lg lg:text-xl xl:text-2xl text-gold1">
            Filter by
          </div>
          <div>
            <div className="flex px-4 py-1 text-base items-center md:text-lg xl:text-xl text-gold1">
              <input
                checked={calendarData.online}
                onChange={() =>
                  dispatchCalendarData({ type: CALENDAR_ACTIONS.TOGGLE_ONLINE })
                }
                type="checkbox"
                className="px-6 py-6"
              />
              <p className="ml-2">Online</p>{" "}
            </div>
            <div className="flex px-4 py-1 text-base items-center md:text-lg xl:text-xl text-gold1">
              <input
                checked={calendarData.inPerson}
                onChange={() =>
                  dispatchCalendarData({
                    type: CALENDAR_ACTIONS.TOGGLE_IN_PERSON,
                  })
                }
                type="checkbox"
                className="px-6 py-6"
              />
              <p className="ml-2">In house</p>{" "}
            </div>
          </div>
        </div>

        <div>
          <div className="mx-4 my-4 relative flex justify-end">
            <select className="filter appearance-none">
              <option>Meditation</option>
              <option>Talks</option>
            </select>
          </div>
          <div className="mx-4 my-4 relative">
            <select className="filter appearance-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="mx-4 my-4 relative">
            <select className="filter appearance-none">
              <option>Five docks</option>
              <option>Hindi</option>
            </select>
          </div>
          <div className="mx-4 my-4 relative">
            <select className="filter appearance-none">
              <option>suitable for BKS</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
