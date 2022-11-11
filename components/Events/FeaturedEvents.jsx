import React, { useContext } from "react";
import { eventsAdapter } from "../../lib/eventsAdapter";
import EventBlock from "./EventBlock";
import { GlobalContext } from "../../pages/_app";
import { categoriesAdapter } from "../../lib/globalPropertiesAdapter";

export default function FeaturedEvents({ data }) {
  const eventsAd = eventsAdapter(data);
  const { globalProperties, locale } = useContext(GlobalContext);

  const eventsCategories = categoriesAdapter(
    globalProperties,
    "eventsCategories",
    "::"
  );

  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <EventBlock data={data} title={eventsCategories[0]} />
      </div>
    </div>
  );
}
