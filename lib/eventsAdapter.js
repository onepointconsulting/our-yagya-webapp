import { convertToLocalZone, formateDateToLocal } from './dateAdapter'
import { DateTime } from 'luxon'

function flatEvents (events) {
  return events.flatMap((s) => {

    const id = s.id
    const startDate = s.attributes?.startDate
    const endDate = s.attributes?.endDate
    let categories = []
    const categoriesData = s.attributes?.event?.data?.attributes?.event_categories?.data
    const image = s.attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.url
    const alternativeText = s.attributes?.event?.data?.attributes?.featuredImage?.data?.attributes?.alternativeText
    const timezoneAttributes = s.attributes?.timezone?.data?.attributes
    const timezoneName = timezoneAttributes?.name
    const timezone = timezoneAttributes?.abbreviation
    const title = s.attributes?.event?.data?.attributes?.title
    const joinLink = s.attributes?.event?.data?.attributes?.joinLink?.trim()

    if (!categoriesData || categoriesData.length === 0) {
      return []
    }
    for (const c of categoriesData) {
      categories.push(c.attributes?.title)
    }
    return categories.map((category) => {

      return {
        id,
        category: category,
        title,
        startDate,
        endDate,
        timezone,
        timezoneName,
        image,
        joinLink,
        alternativeText,
        localizedDate: convertToLocalZone(startDate, timezoneName),
      }
    })
  })
}

export function flatEventsAdapter (data) {
  const events = data?.data?.eventSessions?.data
  if (events.length > 0) {
    return flatEvents(events)
  }
  return []
}

export const eventsAdapter = (data) => {
  const events = data?.data?.eventSessions?.data

  if (events.length > 0) {
    const session = flatEvents(events)

    return session.reduce((previousValue, currentValue) => {
      if (!previousValue[currentValue.category]) {
        previousValue[currentValue.category] = []
      }
      previousValue[currentValue.category].push({
        id: currentValue.id,
        title: currentValue.title,
        date: currentValue.startDate,
        timezone: currentValue.timezone,
        timezoneName: currentValue.timezoneName,
        image: currentValue.image,
        joinLink: currentValue.joinLink,
        alternativeText: currentValue.alternativeText,
      })
      return previousValue
    }, {})
  }

  return []
}

export const singleEventAdapter = (data) => {
  const singleEventData = data?.data?.eventSessions?.data

  if (singleEventData.length > 0) {
    const attributes = singleEventData[0]?.attributes
    const venueData = attributes?.event?.data?.attributes?.venue?.data?.attributes
    const eventData = attributes?.event?.data?.attributes
    const sTimezone = attributes?.timezone?.data?.attributes
    const sStartDate = attributes?.startDate
    const sEndDate = attributes?.endDate
    const sOnlineStatus = eventData?.onlineStatus
    const eventTitle = eventData?.title
    const sEeventDescription = attributes?.description
    const sEventImage = eventData?.featuredImage?.data?.attributes?.url
    const sAlternativeText = eventData?.featuredImage?.data?.attributes?.alternativeText
    const venueCountry = venueData?.country?.data?.attributes?.name
    const joinLink = eventData?.joinLink?.trim()
    const requiresRegistration = !!joinLink
    const venueName = venueData?.name
    const venueAddress = venueData?.address
    const venueLocality = venueData?.locality
    const venuePostalCode = venueData?.postalCode
    return {
      sEventImage,
      sAlternativeText,
      sStartDate,
      sTimezone,
      sEndDate,
      eventTitle,
      sEeventDescription,
      sOnlineStatus,
      requiresRegistration,
      joinLink,
      venueName,
      venueAddress,
      venueLocality,
      venuePostalCode,
      venueCountry,
    }
  }
  return null
}

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
  const selectedStart = DateTime.fromJSDate(selectedStartDate)
  const selectedEnd = DateTime.fromJSDate(selectedEndDate)
  if (events?.length > 0) {
    return events.filter(event => {
      const { startDateTime } = event
      const startDate = DateTime.fromISO(startDateTime)
      return selectedStart <= startDate && selectedEnd > startDate
    }).map(event => {
      const { id, title, subTitle, startDateTime, description, imageUrl } = event
      return { id, title, subTitle, startDateTime, description, imageUrl }
    })
  }
  return []
}

export const getEventsByCategory = (category, events) => {
  const eventsRecordByCategory = events.find(event => event.title === category)
  return eventsRecordByCategory.events
}

export const getChildrenCountByCategory = (category, events) => {
  const eventsRecordByCategory = events.find(event => event.title === category)
  return parseInt(eventsRecordByCategory.children_count)
}

export const getTotalByCategory = (category, events) => {
  const eventsRecordByCategory = events.find(event => event.title === category)
  return parseInt(eventsRecordByCategory.total)
}

export const getShowCardByCategory = (category, events) => {
  const eventsRecordByCategory = events.find(event => event.title === category)
  return eventsRecordByCategory.show_card
}

export const getFeaturedCategory = (events) => {
  const featuredCategory = events.find(event => (!!event.featured))
  if (events?.length > 0 && !!events[0] && !!featuredCategory) {
    return {
      id: featuredCategory.id,
      title: featuredCategory.title,
      children_count: featuredCategory.children_count,
    }
  }
  return {}
}

export const getFeaturedEvents = (events, featuredCategoryId) => {
  return events.filter(event => event.id === featuredCategoryId)[0]
}

export const getNonFeaturedEvents = (events, featuredCategoryId) => {
  return events.filter(event => event.id !== featuredCategoryId)
}

export const getNonFeaturedCategories = (categories, featuredCategoryId) => {
  return categories.filter(category => category.id !== featuredCategoryId)
}

export const blogEventsAdapter = (events, locale) => {
  return events.map(event => ({
    id: event.id,
    title: event.title,
    subTitle: event.subTitle,
    description: event.description,
    date: formateDateToLocal(
        event.startDateTime,
        locale,
        event.timezone,
        'dd LLLL yyyy',
      ) + ' ' +
      formateDateToLocal(
        event.startDateTime,
        locale,
        event.timezone,
        'hh:mm a ZZZZ',
      ),
    img: event.imageUrl,
    joinLink: event.joinLink,
    liveLink: event.liveLink,
  }))
}

export const calendarFiltersAdapter = (filters) => {
  return {
    venues: filters?.venues?.buckets?.map(item => item.key),
    languages: filters?.langs?.buckets?.map(item => item.key),
    eventTypes: filters?.eventTypes?.buckets?.map(item => item.key),
  }
}
