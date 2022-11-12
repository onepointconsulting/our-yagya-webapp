const ArrowIcon = () => {
    return (
      <div>
        <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 lg:py-8 cursor-poainter">
          <a href="/events.html">
            <img
              className="w-8 xs:w-10"
              src="./img/icons/ArrowDown.png"
            />
          </a>
        </h1>
      </div>
    );
  };
  
  const EventBlocks = ({ adaptedEvents, eventsCategories }) => {
    if (eventsCategories.length === 0) {
      return <></>;
    }

    if(adaptedEvents.length === 0) {
        return <></>;
    }
  
    const slicedEventCategories = eventsCategories.slice(1);
  
  
    return (
        <div className="grid w-full grid-cols-1 gap-8 px-8 md:grid-cols-2">
          {slicedEventCategories.map((category, i) => {
            if (!!!adaptedEvents[category]) {
              return <></>;
            }
            return (
              <div className="w-full bg-gray-200 h-fit" key={i}>
                <div className="py-2 pl-4 pr-2 text-[1.2rem] text-slate-50 capitalize filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                  {category}
                </div>
                {adaptedEvents[category]?.map((eve) => {
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
  