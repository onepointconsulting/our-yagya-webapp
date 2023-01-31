export const titleAdapter = (data) => {
  const pageData = data?.data?.data?.pageLayouts?.data
  if (pageData?.length > 0) {
    const parentCategory = data?.data?.data?.parentCategory
    if (!!parentCategory &&
      !!parentCategory?.data?.eventCategories?.data &&
      parentCategory?.data?.eventCategories?.data.length > 0) {
      const categoryTitle = parentCategory?.data?.eventCategories?.data[0].attributes.title
      return `${pageData[0].attributes.title}: ${categoryTitle}`
    }
    return pageData[0].attributes.title
  }
  return ''
}