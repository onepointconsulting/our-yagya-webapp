import React, { useContext } from "react";
import { formateDate } from "../../lib/dateAdapter";
import Link from "../../node_modules/next/link";
import { GlobalContext } from "../../pages/_app";
import MoreInfoButton from "./MoreInfoButton";
import JoinLinkButton from "./JoinLinkButton";

const MoreInfoAndRegister = ({ event }) => {
  return (
    <>
      <div className="w-24 md:w-40 lg:w-52 xl:w-60">
        {/* More info button */}
        <MoreInfoButton event={event} />

        {/* Register/join link button */}
        <JoinLinkButton event={event} />
      </div>
    </>
  );
};

const FeaturedEventImage = ({ event }) => {
  return (
    <>
      <div className="relative w-24 h-20 xss:w-36 md:w-44 lg:w-48 xl:w-64 xss:h-24 md:h-28 xl:h-36">
        <img
          className="object-cover absolute w-full h-full"
          src={event.imageUrl}
          alt={event.alternativeText}
          title={event.alternativeText}
        />
      </div>
    </>
  );
};

const FeaturedEventItem = ({ event }) => {
  const { locale } = useContext(GlobalContext);

  if (event?.imageUrl?.length === 0) {
    return [];
  }

  return (
    <>
      <div className="flex transparency">
        <div className="cursor-pointer w-full my-1 px-1 md:px-2 ">
          <div className="flex items-center justify-between">
            <Link href={`/single_event/${event.id}`}>
              <div className="flex items-center lg:w-[38rem] xl:w-[51rem] 2xl:w-[64rem]">
                {/* <!-- image --> */}
                <div className="relative">
                  <FeaturedEventImage event={event} />
                </div>

                {/* title and date */}
                <div className="px-2 md:px-4 w-[40vw] xss:max-w-[52vw] md:max-w-[50vw] lg:max-w-full">
                  <div className="h-8 md:h-24 lg:h-32 overflow-hidden max-h-full md:flex items-center">
                    <h1 className="line-clamp-2 md:line-clamp-3 font-medium xss:leading-4 text-sm xss:text-lg text-redfull md:text-2xl">
                      {event.title}
                    </h1>
                  </div>

                  <div className="items-center justify-between w-full md:flex">
                    <div>
                      <p className="md:leading-4 lg:leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(
                          event.startDateTime,
                          locale,
                          "dd LLLL yyyy"
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="md:leading-4 lg:leading-6 text-[10px] text-gray-400 md:text-[1rem] lg:text-[1.125rem]">
                        {formateDate(
                          event.startDateTime,
                          locale,
                          "hh:mm a ZZZZ"
                        )}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <MoreInfoAndRegister event={event} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedEventItem;
