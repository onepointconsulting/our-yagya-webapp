export const titleAdapter = (data) => {
  const pageLayoutsData = data?.data?.data?.pageLayouts?.data;
  if (!Array.isArray(pageLayoutsData) || pageLayoutsData.length === 0) {
    return "";
  }
  const newsCategory =
    data.data.data.newsCategoryInfo?.data?.category?.data?.attributes?.title;
  const pageTitle = pageLayoutsData[0].attributes.title;
  const eventTitle = data.data.data.eventSessions?.data?.[0]?.attributes?.title;
  const parentCategoryData =
    data.data.data.parentCategory?.data?.eventCategories?.data;

  let categoryTitle = "";
  if (parentCategoryData && parentCategoryData.length > 0) {
    categoryTitle = parentCategoryData[0].attributes.title;
  }

  let titleString = pageTitle;
  if (categoryTitle) {
    titleString += `: ${categoryTitle}`;
  }
  if (eventTitle) {
    titleString += `: ${eventTitle}`;
  }
  if (newsCategory) {
    titleString += `: ${newsCategory}`;
  }

  return titleString;
};
