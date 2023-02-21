import { DateTime } from 'luxon'

const DEFAULT_TIMEZONE = "Europe/London"

export function formateDate (value, locale, format = 'dd LLLL yyyy') {
  return DateTime.fromISO(value).
    setLocale(locale).
    toFormat(format)
}

export function formateDateToLocal (value, locale, timeZone = DEFAULT_TIMEZONE, format = 'dd LLLL yyyy') {
  const orig = DateTime.fromISO(value.replace(/Z$/, ''), { zone: timeZone })
  const dateTime = orig.toLocal()
  return dateTime.setLocale(locale).
    toFormat(format)
}

export function processEventDates (adaptedEvents) {
  return Object.entries(adaptedEvents).
    map(e => {
      for (const ev of e[1]) {
        ev.localizedDate = convertToLocalZone(ev.date, ev.timezoneName)
      }
      return e
    }).
    reduce((a, e) => ({ ...a, ...{ [e[0]]: e[1] } }), {})
}

export function convertToLocalZone (dateTimeAsString, timeZone = DEFAULT_TIMEZONE) {
  const orig = DateTime.fromISO(dateTimeAsString.replace(/Z$/, ''),
    { zone: timeZone })
  let dateTime = orig.toLocal()
  return dateTime.toString().replace(/Z$/, '')
}

export function findStartAndEndMonth (
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
) {
  const start = DateTime.fromJSDate(new Date(year, month, 1))
  const end = start.endOf('month')
  let startStr = start.toISODate()
  let endStr = end.toISODate()
  return { start: startStr, end: endStr }
}

export default function findPeriodFromNow(minusStart = 1, plusStart = 12) {
  const now = DateTime.now()
  const start = now.plus({months: -minusStart}).toISODate()
  const end = now.plus({months: plusStart}).toISODate()
  return { start, end }
}

const padDuration = (n) => `${n}`.padStart(2, '0')

export const durationAdapter = (videoData) => {

  let { durationHours, durationMinutes, durationSeconds } = videoData

  durationSeconds = Math.min(durationSeconds, 59)
  durationMinutes = Math.min(durationMinutes, 59)

  const hasHours = durationHours > 0
  const hasMinutes = durationHours === 0 && durationMinutes > 0
  const hasOnlySeconds = durationHours === 0 && durationMinutes === 0 &&
    durationSeconds > 0

  if (hasHours) {
    return padDuration(durationHours) + ':' + padDuration(durationMinutes) +
      ':' + padDuration(durationSeconds)
  } else if (hasMinutes) {
    return padDuration(durationMinutes) + ':' + padDuration(durationSeconds)
  } else if (hasOnlySeconds) {
    return padDuration(durationMinutes) + ':' + padDuration(durationSeconds)
  }
  return '00:00'
}

export function currentTimeAsISO() {
  return DateTime.now().toUTC().toISO()
}

export function dateToISO(date) {
  return DateTime.fromJSDate(date).toISODate()
}

export function dateToFormat(date) {
  return DateTime.fromJSDate(date).toFormat("dd LLLL yyyy")
}