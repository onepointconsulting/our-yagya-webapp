import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { EventItem } from "./EventItem";
import FeaturedEventItem from "./FeaturedEventItem";
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const ArrowIcon = ({ categoryId }) => {
  const iconUrl = '/img/icons/ArrowDown.png'
  const { t } = useTranslation();
  return (
    <div className="">
        <h1
          className="flex justify-center py-4 text-5xl text-center text-gray-400 cursor-pointer"
          key = {categoryId}>
          <Link href={`/event/category/${categoryId}`}>
            <img className="w-8 xs:w-10" src={iconUrl} alt={t('more')}/>
          </Link>
        </h1>
    </div>
  );
};

/**
 * Loops through events in category
 */
const EventBlock = ({ category, categoryId, events, hasChildren }) => {
  const { locale } = useContext(GlobalContext)

  return (
    <div className="relative w-full bg-gray50 pb-8">
      <>
        <div className="py-2 pl-4 pr-2 text-[1.2rem] text-white capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
          {category}
        </div>
      </>

      {!!events &&
        events?.map((event, i) => {
          if (category === "Featured Events")
            return <FeaturedEventItem locale={locale} event={event} key={i} />;
          else return <EventItem locale={locale} event={event} key={i} />;
        })}

    { !!hasChildren && 
      <div className="absolute inset-x-0 bottom-0  lg:bottom-[1rem]">
        <ArrowIcon categoryId={categoryId} />
      </div>
}
    </div>
  );
};

export default EventBlock;
