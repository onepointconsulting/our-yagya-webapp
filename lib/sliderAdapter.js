import { formateDate, formateDateToLocal } from './dateAdapter'

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

export const eventSliderAdapter = (data, locale, categoryIdStr) => {

    const events = data?.data?.events
    // Try to find the right category
    const categoryId = !!categoryIdStr ? parseInt(categoryIdStr) : null

    const slides = (events?.find(e => e.id === categoryId) ?? events?.[0])?.events
    if (!slides || slides.length === 0) {
        return []
    }
    return slides.map(slide => ({
        ...slide,
        link: slide.viewLink,
        image: {data: {attributes: {url: slide.imageUrl, alternativeText:""}}},
        startTimestampStr: formateDateToLocal(
            slide.startDateTime,
            locale,
            slide.timezone,
            "dd LLLL yyyy"
          ) + "  " +
          formateDateToLocal(
            slide.startDateTime,
            locale,
            slide.timezone,
            "hh:mm a ZZZZ"
          )
    }))
}
