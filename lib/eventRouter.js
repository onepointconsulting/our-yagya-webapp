
const BLOG_THRESHOLD = 10

export function createEventLinks(showCard, categoryId, total, hasChildrenCategories) {
  let href
  if (showCard && hasChildrenCategories) {
    href = `/event/category/${categoryId}`
  } else {
    if (total <= BLOG_THRESHOLD)
      href = `/event/blog/${categoryId}`
    else
      href = `/event/category/${categoryId}`// TODO: change the calendar
  }
  return href
}