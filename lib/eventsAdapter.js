export const eventsAdapter = (data) => {
  const g = data;
  console.log("gdata: ", g);
  const events = data?.data?.eventSessions?.data;

  if (events.length > 0) {
    const session = events.map((s) => {
      const startDate = s.attributes?.startDate;
      const endDate = s.attributes?.endDate;
      const category = s.attributes?.event?.data?.attributes?.categories?.data;

      const title = s.attributes?.event?.data?.attributes?.title;
      return {
        category,
        title,
        startDate,
        endDate,
      };
    });
    console.log("session", session);
  }

  // console.log("eventsdata", events);

  return [];
};
