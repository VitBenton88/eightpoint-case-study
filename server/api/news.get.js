import articles from '~/server/mock/news.json'

export default defineEventHandler(event => {
  const query = getQuery(event)
  const category = query.category?.toLowerCase()

  if (!category) return articles

  return articles.filter(article =>
    article.category.toLowerCase() === category
  )
})