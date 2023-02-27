
const LIST_THRESHOLD = 4

export function createNewsLinks(showCard, categoryId, total, hasChildrenCategories) {
  if (showCard && hasChildrenCategories) {
    return `/news/category/${categoryId}`
  } else 
    // if (total <= LIST_THRESHOLD)
      return `/event/list/${categoryId}` // TODO: event-lists to come 
}