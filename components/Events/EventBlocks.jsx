import Link from "../../node_modules/next/link";

const ArrowIcon = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center py-4 lg:py-8 cursor-poainter">
      <Link href="/">
        <a>
          <img className="w-8 xs:w-10" src="../img/icons/ArrowDown.png" />
        </a>
      </Link>
    </div>
  );
};

const EventBlocks = ({ adaptedEvents, eventsCategories }) => {
  if (eventsCategories.length === 0) {
    return <></>;
  }

  const slicedEventCategories = eventsCategories.slice(1);

  return (
    <div className="grid w-full grid-cols-1 gap-4 px-4 md:gap-8 md:px-8 md:grid-cols-2">
      {/* <!-- section left --> */}
      {slicedEventCategories.map((category, i) => {
        if (!!!adaptedEvents[category]) {
          return <></>;
        }
        return (
          <div className="relative pb-8 my-8 bg-gray-200" key={i}>
            <div className="py-2 pl-4 pr-2 text-[1.2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
              {category}
            </div>
            {adaptedEvents[category].map((eve) => {
              return (
                <>
                  <div className="h-auto p-4 overflow-y-auto metropolis_medium">
                    <div className="text-lg text-redfull md:text-2xl">
                      {eve.title}
                    </div>

                    <div className="pb-3">
                      <span className="text-sm text-gray-700 md:text-base">
                        {eve.date}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
            <ArrowIcon />
          </div>
        );
      })}
    </div>
  );
};

export default EventBlocks;
