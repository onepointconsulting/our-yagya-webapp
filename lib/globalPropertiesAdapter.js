export const globalPropertyAdapter = (globalProperties, key) => {
    if (globalProperties?.data.length > 0) {
        const matches = globalProperties?.data.filter(
            (gb) => gb.attributes['key'] === key,
        )
        if (matches.length > 0) {
            return matches[0].attributes['value']
        }
    }
    return ''
}

// TODO: REMOVE: Not needed anymore as categories news are being picked up by apiClient news-function 
export const categoriesAdapter = (
    globalProperties,
    key = 'newsCategories',
    sep = ','
) => {
    const resArray = globalProperties?.data.filter(
        (gb) => gb.attributes.key === key).map((gb) => gb.attributes.value)
    if (resArray.length === 1) {
        return resArray[0].split(sep).map(s => s.trim())
    }
    return []
}
