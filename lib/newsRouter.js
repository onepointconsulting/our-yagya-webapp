export default function createNewsLinks(showCard, categoryId, hasChildrenCategories) {
  if (showCard && hasChildrenCategories) {
    return `/news/category/${categoryId}`
  } else 
    return `/news/list/${categoryId}`
}