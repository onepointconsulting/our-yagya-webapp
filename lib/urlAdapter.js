const NOT_FOUND = -1

export function pageUrlAdapter (resolvedUrl) {
    let url = resolvedUrl
    if (url === '/' || url === '/es') {
        url = '/index'
    }
    url = url.trim().replace(/\/\d+$/, '')
    return url
}

export function idUrlAdapter (resolvedUrl) {
    const number = resolvedUrl.replace(/.+\/(\d+)/, '$1')
    if (!isNaN(number)) {
        return number
    }
    return NOT_FOUND
}

export function shortenUrl (url) {
    if(!url) {
        return ""
    }
    let noPrefix = url.replace(/^https?:\/\//, "")
    const stringLength = Math.min(noPrefix.length, 20)
    let shortenedUrl = noPrefix.substring(0, stringLength)
    if(stringLength < noPrefix.length) {
        shortenedUrl += "..."
    }
    return shortenedUrl
}