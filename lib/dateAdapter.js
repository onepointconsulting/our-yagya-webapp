import { DateTime } from 'luxon'

export function formateDate (value, locale, format='dd LLLL yyyy') {
    const formattedDate = DateTime.fromISO(value).
        setLocale(locale).
        toFormat(format)
    console.log('formateDate', formattedDate, locale)
    return formattedDate
}