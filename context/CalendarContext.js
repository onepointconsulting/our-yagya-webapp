import { createContext, useReducer } from 'react'

export const CalendarContext = createContext({})

export const DEFAULT_VALUES = {
  EVENT_TYPE: "ALL",
  VENUE: "ALL"
}

export const CALENDAR_ACTIONS = {
  SET_EVENT_TYPES: 'SET_EVENT_TYPES',
  SET_EVENT_TYPE: 'SET_EVENT_TYPE',
  SET_LANGUAGES: 'SET_LANGUAGES',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_VENUES: 'SET_VENUES',
  SET_VENUE: 'SET_VENUE',
  SET_SUITABLES: 'SET_SUITABLES',
  SET_SUITABLE: 'SET_SUITABLE',
  TOGGLE_ONLINE: 'TOGGLE_ONLINE',
  TOGGLE_IN_PERSON: 'TOGGLE_IN_PERSON',
  SET_EVENTS: 'SET_EVENTS'
}

const reducer = (state, action) => {
  switch (action.type) {
    case CALENDAR_ACTIONS.SET_EVENT_TYPE:
      return {
        eventType: action.eventType,
        ...state
      }
    default:
      return {
        ...state
      }
  }
}

export const CalendarContextProvider = props => {
  const [calendarData, dispatchCalendarData] = useReducer(
    reducer, {
      languages: [],
      eventTypes: [],
      venues: [],
      suitables: [],
      eventType: DEFAULT_VALUES.EVENT_TYPE,
      venue: DEFAULT_VALUES.VENUE
    }
  )
  return (
    <CalendarContext.Provider value={{
      calendarData, dispatchCalendarData
    }}>
      {props.children}
    </CalendarContext.Provider>
  )
}