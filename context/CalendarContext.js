import { createContext, useReducer } from 'react'

export const CalendarContext = createContext({})

export const DEFAULT_VALUES = {
  EVENT_TYPE: "ALL",
  VENUE: "ALL"
}

export const CALENDAR_ACTIONS = {
  SET_FILTERS: 'SET_FILTERS',
  SET_EVENT_TYPE: 'SET_EVENT_TYPE',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_VENUE: 'SET_VENUE',
  TOGGLE_ONLINE: 'TOGGLE_ONLINE',
  TOGGLE_IN_HOUSE: 'TOGGLE_IN_HOUSE',
  SET_EVENTS: 'SET_EVENTS',
  SET_CATEGORY_ID: 'SET_CATEGORY_ID',
  SET_PRIVATE: 'SET_PRIVATE',
  SET_SELECTED_PERIOD: 'SET_SELECTED_PERIOD'
}

const reducer = (state, action) => {
  switch (action.type) {
    case CALENDAR_ACTIONS.SET_EVENT_TYPE:
      return {
        ...state,
        eventType: action.eventType
      }
    case CALENDAR_ACTIONS.SET_VENUE:
      return {
        ...state,
        venue: action.venue
      }
    case CALENDAR_ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    case CALENDAR_ACTIONS.TOGGLE_ONLINE:
      return {
        ...state,
        online: !!state.inHouse ? !state.online : state.online
      }
    case CALENDAR_ACTIONS.TOGGLE_IN_HOUSE:
      return {
        ...state,
        inHouse: !!state.online ? !state.inHouse : state.inHouse
      }
    case CALENDAR_ACTIONS.SET_PRIVATE:
      return {
        ...state,
        privateEvent: action.privateEvent
      }
    case CALENDAR_ACTIONS.SET_EVENTS:
      return {
        ...state,
        events: action.events
    }
    case CALENDAR_ACTIONS.SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.categoryId
    }
    case CALENDAR_ACTIONS.SET_FILTERS:
      return {
        ...state,
        eventTypes: action.eventTypes,
        venues: action.venues,
        languages: action.languages
      }
    case CALENDAR_ACTIONS.SET_SELECTED_PERIOD:
      return {
        ...state,
        selectedStartDate: action.selectedStartDate,
        selectedEndDate: action.selectedEndDate,
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
      online: true,
      inHouse: true,
      privateEvent: false,
      eventType: DEFAULT_VALUES.EVENT_TYPE,
      venue: DEFAULT_VALUES.VENUE,
      events: [],
      categoryId: "",
      selectedStartDate: null,
      selectedEndDate: null
    }
  )
  return (
    <CalendarContext.Provider value={{calendarData, dispatchCalendarData}}>
      {props.children}
    </CalendarContext.Provider>
  )
}
