export const eventsAdapter = (data) => {
  const events = data?.data?.events?.data;
  console.log("eventsdata", events);

  if (events.length > 0) {
    // NOTE: This function is not completed.
    const eventsCategories = events.map((e) => {
      const category = e.attributes?.categories;
      const eventSessions = e?.attributes?.eventSessions?.data;
      if (eventSessions.length > 0 || category.length > 0) {
        const getCategory = category?.data?.[0];
        console.log("getCategory", getCategory);

        const getEventSessions = eventSessions[0];
        console.log("getEventSessions", getEventSessions);

        return { getCategory, getEventSessions };
      }
    });
  }

  return [];
};
