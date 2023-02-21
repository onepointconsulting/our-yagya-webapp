import { DateTime } from 'luxon'

export const calendarAdapter = (events) => {
    if (events?.length > 0) {
      return events.map(event => {
        const startDate = event.startDateTime.split('T')[0]
        return {
          start: startDate,
          allDay: true,
          display: 'background',
          // title: event.title
        }
      })
    }
    return []
  }
  
  export const calendarSpecialDaysAdapter = ({
    events,
    selectedStartDate,
    selectedEndDate,
  }) => {
    const selectedStart = DateTime.fromJSDate(selectedStartDate)
    const selectedEnd = DateTime.fromJSDate(selectedEndDate)
    if (events?.length > 0) {
      return events.filter(event => {
        const { startDateTime } = event
        const startDate = DateTime.fromISO(startDateTime)
        return event.specialDay && selectedStart <= startDate && selectedEnd >
          startDate
      }).map(event => {
        const { id, title, startDateTime } = event
        return {
          id,
          title,
          startDateTime,
        }
      })
    }
    return []
  }
  
  export const calendarFooterEventsAdapter = ({
    events,
    selectedStartDate,
    selectedEndDate,
  }) => {
    if(!selectedStartDate || !selectedEndDate) {
      return []
    }
    const selectedStart = DateTime.fromJSDate(selectedStartDate)
    const selectedEnd = DateTime.fromJSDate(selectedEndDate)
    if (events?.length > 0) {
      return events.filter(event => {
        const { startDateTime } = event
        const startDate = DateTime.fromISO(startDateTime)
        return selectedStart <= startDate && selectedEnd > startDate
      }).map(event => {
        const { id, title, subTitle, startDateTime, description, imageUrl, joinLink } = event
        return { id, title, subTitle, startDateTime, description, imageUrl, joinLink }
      })
    }
    return []
  }

  export const calendarFiltersAdapter = (filters) => {
    return {
      venues: filters?.venues?.buckets?.map(item => item.key),
      languages: filters?.langs?.buckets?.map(item => item.key),
      eventTypes: filters?.eventTypes?.buckets?.map(item => item.key),
    }
  }