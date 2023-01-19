import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { EventItem } from "./EventItem";
import useArrowHook from "../../hooks/useArrowHook";
import FeaturedEventItem from "./FeaturedEventItem";
import Link from 'next/link'

const ArrowIcon = ({ start, arrowDirection, isEnd, categoryId }) => {
  const [t, iconUrl, isOnTop, isTheEnd] = useArrowHook(
    arrowDirection,
    start,
    isEnd
  );

  const onClick = (e) => {
    e.preventDefault();
    // if (
    //   (arrowDirection === 'up' && start !== 0) ||
    //   (arrowDirection === 'down' && !isEnd)
    // ) {
    //   setStart(start + step)
    // }

    // TODO: navigate deeper into the category based on the categoryId
    // HOWTO navigate into a page and fetch the URL params
  };

  return (
    <div className="">
      {!isOnTop && !isTheEnd && (
        <h1
          className="flex justify-center py-4 text-5xl text-center text-gray-400 cursor-pointer"
          key = {categoryId}>
          <Link href={`/event/category/${categoryId}`}>
            <img className="w-8 xs:w-10" src={iconUrl} alt={t('more')}/>
          </Link>
        </h1>
      )}
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
        <ArrowIcon
          start={0}
          setStart={() => {}}
          arrowDirection="down"
          isEnd={false}
          categoryId={categoryId}
        />
      </div>
}
    </div>
  );
};

export default EventBlock;
