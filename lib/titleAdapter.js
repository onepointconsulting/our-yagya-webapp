

export const titleAdapter = (data) => {
    const pageData = data?.data?.data?.pageLayouts?.data
    if(pageData?.length > 0) {
        return pageData[0].attributes.title
    }
    return ''
}