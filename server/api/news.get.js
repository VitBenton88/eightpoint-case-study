import articles from '~/server/mock/news.json'

export default eventHandler(event => {
  const query = getQuery(event)
  const category = query.category?.toLowerCase()

  if (!category || category === 'home') return articles

  return articles.filter(article =>
    article.category.toLowerCase() === category
  )
})