const ArrowIcon = ({ eve }) => {
    return (
        <div>
            <h1 className="flex justify-center py-4 text-5xl text-center text-gray-400 lg:py-8 cursor-poainter">
                <a href="/events.html">
                    <img
                        className="w-8 xs:w-10"
                        src="./img/icons/ArrowDown.png"
                        alt={eve.title}
                        title={eve.title}
                    />
                </a>
            </h1>
        </div>
    )
}

const EventBlocks = ({ adaptedEvents, eventsCategories }) => {

    if (eventsCategories.length === 0) {
        return <></>
    }

    const slicedEventCategories = eventsCategories.slice(1)

    console.log('adaptedEvents', adaptedEvents)

    return (
        <div
            className="justify-between w-full md:flex xl:items-center md:w-11/12 lg:w-10/12">
            <div className="w-full md:mr-4">
                {/* <!-- section left --> */}
                {slicedEventCategories.map((category) => {
                    if (!!!adaptedEvents[category]) {
                        return <></>
                    }
                    return (
                        <div className="my-8 bg-gray-200">
                            <div
                                className="py-2 pl-4 pr-2 text-[2rem] text-slate-50 filosofia_italic bg-button-color bg-gold1 md:text-4xl">
                                {category}
                            </div>
                            {adaptedEvents[category].map((eve) => {
                                return (
                                    <>
                                        <div
                                            className="h-auto p-4 overflow-y-auto metropolis_medium">
                                            <div
                                                className="text-lg text-redfull md:text-2xl">
                                                {eve.title}
                                            </div>

                                            <div className="pb-3">
                                            <span
                                                className="text-sm text-gray-700 md:text-base">
                                                {eve.date}
                                            </span>
                                            </div>
                                        </div>
                                        <ArrowIcon eve={eve}/>
                                    </>
                                )
                            })}
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default EventBlocks