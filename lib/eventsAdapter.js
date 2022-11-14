export const eventsAdapter = (data) => {

  const dummyData = [
    {
    attributes : { 
      title: 'Online Global Silence Retreat Silence Retreat',
      timestamp: '2022-11-19T07:58:00.000Z'
    }
  },
  {
    attributes : { 
      title: 'Avyakt BapDada milan',
      timestamp: '2022-11-15T07:58:00.000Z'
    }
  },
  {
    attributes : { 
      title: 'Diwali Festival',
      timestamp: '2022-11-04T07:58:00.000Z'
      ///  TODO: startDate of first session ,    endDate of last session
    }
  }]

  // const events = data?.data?.events?.data;
  const events = dummyData;

  if (events.length > 0) {
    return events;
  }
  return [];
};
