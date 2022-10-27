import { DateTime } from 'luxon'

export function formateDate (value, locale, format='dd LLLL yyyy') {
    return DateTime.fromISO(value).
        setLocale(locale).
        toFormat(format)
}

const padDuration = (n) => `${n}`.padStart(2, "0")

export const durationAdapter = (videoData) => {

    let { durationHours, durationMinutes, durationSeconds } = videoData

    durationSeconds = Math.min(durationSeconds, 59)
    durationMinutes = Math.min(durationMinutes, 59)

    const hasHours = durationHours > 0
    const hasMinutes = durationHours === 0 && durationMinutes > 0
    const hasOnlySeconds = durationHours === 0 && durationMinutes === 0 && durationSeconds > 0

    if (hasHours) {
        return padDuration(durationHours) + ':' + padDuration(durationMinutes) + ':' + padDuration(durationSeconds)
    } else if (hasMinutes) {
        return padDuration(durationMinutes) + ':' + padDuration(durationSeconds)
    } else if (hasOnlySeconds) {
        return padDuration(durationMinutes) + ':' + padDuration(durationSeconds)
    }
    return '00:00'
}