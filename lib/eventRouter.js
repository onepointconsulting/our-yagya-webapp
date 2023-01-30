
const BLOG_THRESHOLD = 10

export function createEventLinks(showCard, categoryId, total, hasChildren) {
  let href
  if (showCard && hasChildren) {
    href = `/event/category/${categoryId}`
  } else {
    if (total <= BLOG_THRESHOLD)
      href = `/event/blog/${categoryId}`
    else
      href = `/event/category/${categoryId}`
  }
  return href
}