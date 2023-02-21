
const LIST_THRESHOLD = 4

export function createNewsLinks(showCard, categoryId, total, hasChildrenCategories) {
  let href
  if (showCard && hasChildrenCategories) {
    href = `/news/category/${categoryId}`
  } else {
    if (total <= LIST_THRESHOLD)
      href = `/event/lists/${categoryId}` // TODO: event-lists to come 
    // else
    //   href = `/event/calendar/${categoryId}`
  }
  return href
}