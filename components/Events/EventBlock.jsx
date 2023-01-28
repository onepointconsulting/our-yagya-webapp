import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { EventItem } from "./EventItem";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const MAX_EVENTS = 4;

const ArrowIcon = ({ categoryId, showCard, total }) => {
  const iconUrl = "/img/icons/ArrowDown.png";
  const { t } = useTranslation();
  let href 
  if (showCard) {
    if (total < 5)
      href = `/events-blog/${categoryId}`
      else
      href = `/calendar`
  } else 
    href = `/event/category/${categoryId}`

  return (
    <div className="">
      <h1
        className="flex justify-center py-4 text-5xl text-center text-gray-400 cursor-pointer"
        key={`down-arrow-${categoryId}`}
      >
        <Link href={href}>
          <img className="w-8 xs:w-10" src={iconUrl} alt={t("more")} />
        </Link>
      </h1>
    </div>
  );
};

/**
 * Loops through events in category
 */
const EventBlock = ({ category, categoryId, events, hasChildren, showCard, total }) => {
  const { locale } = useContext(GlobalContext);

  return (
    <div className="relative w-full bg-gray50 pb-8">
      <>
        <div className="py-2 pl-4 pr-2 text-[1.2rem] text-white capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
          {category}
        </div>
      </>

      {!!events &&
        events.slice(0, MAX_EVENTS).map((event, i) => {
          // if (category === "Featured Events")
          //   return <FeaturedEventItem locale={locale} event={event} key={i} />;
          // else
          return <EventItem locale={locale} event={event} key={i} />;
        })}

      {(hasChildren || showCard) && ( 
        <div className="absolute inset-x-0 bottom-0  lg:bottom-[2px]">
          <ArrowIcon categoryId={categoryId} showCard={showCard} total={total} />
        </div>
      )}
    </div>
  );
};

export default EventBlock;
