export const titleAdapter = (data) => {
  const pageLayoutsData = data?.data?.data?.pageLayouts?.data
  if (!Array.isArray(pageLayoutsData) || pageLayoutsData.length === 0) {
    return ''
  }
  const eventTitle = data.data.data.eventSessions?.data?.[0]?.attributes?.title;
  const parentCategoryData = data.data.data.parentCategory?.data?.eventCategories?.data
  if (Array.isArray(parentCategoryData) && parentCategoryData.length > 0) {
    const categoryTitle = parentCategoryData[0].attributes.title
    return `${pageLayoutsData[0].attributes.title}: ${categoryTitle}`
  }
      // event/blog : This code is not working in http://localhost:3000/es/event/blog/id, 
      // event/blog : I belive it's becasue of "es" (Spanish) beofre event/blog, as we have in -> strpi -> customePage /event/blog/ "id" or whatever.
  return pageLayoutsData[0].attributes.title + (eventTitle ? `: ${eventTitle}` : '')
}
