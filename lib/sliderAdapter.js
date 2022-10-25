import { DateTime } from 'luxon'

function formateDate (value, locale) {

    const formattedDate = DateTime.fromISO(value).setLocale(locale).toFormat('dd LLLL yyyy')
    console.log('formateDate', formattedDate, locale)
    return formattedDate
}

export const sliderAdapter = (data, locale) => {

    const slides = data?.data?.slides?.data
    if (!slides || slides.length === 0) {
        return []
    }
    return slides[0]?.attributes?.slider?.slides.map(s => ({
        ...s,
        startTimestampStr: formateDate(s.startTimestamp, locale)
    }))
}

export const sliderImageAdapter = (data) => {
    return data?.image?.data?.attributes
}
