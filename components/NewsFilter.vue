<script setup>
import { ref, computed, watch } from 'vue'
import { useFetch } from '#app'
import NewsFeed from '@/components/NewsFeed.vue'
import TabNav from '@/components/TabNav.vue'

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'news', label: 'News' },
  { id: 'sports', label: 'Sports' },
  { id: 'money', label: 'Money' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'politics', label: 'Politics' },
  { id: 'health', label: 'Health' },
  { id: 'food', label: 'Food' },
  { id: 'entertainment', label: 'Entertainment' },
]

const selectedTab = ref('home')
const showLoader = ref(false)

const { data: articles, status } = useFetch(
  () => `/api/news?category=${selectedTab.value}`,
  {
    watch: [selectedTab],
    key: `category-${selectedTab.value}`,
    immediate: true
  }
)

const featuredArticle = computed(() => {
  return articles.value?.find(article => article.isFeatured) || {}
})

const relatedArticles = computed(() => {
  return [{
    id: 19,
    title: 'City Transit System to Roll Out Electric Buses',
    source: 'urbanupdate.org',
    timestamp: '2025-06-20T07:45:00Z',
    isFeatured: false,
    category: 'lifestyle',
    image: 'https://picsum.photos/id/255/500/250',
    href: 'https://urbanupdate.org/article/19'
  }, {
    id: 20,
    title: 'Scientists Develop New Plastic-Eating Enzyme',
    source: 'techfrontier.io',
    tag: 'Breaking',
    timestamp: '2025-06-20T09:30:00Z',
    isFeatured: true,
    category: 'health',
    image: 'https://picsum.photos/id/256/500/250',
    href: 'https://techfrontier.io/article/20'
  }]
})

watch(status, newStatus => {
  if (newStatus == 'pending') {
    showLoader.value = true
  } else {
    // delay hiding loader to allow for smoother UX
    setTimeout(() => {
      showLoader.value = false
    }, 300)
  }
})

const selectTab = tabId => selectedTab.value = tabId
</script>

<template>
  <div class="filter-wrapper">
    <TabNav :tabs :selected-tab @select-tab="selectTab" />
    <div v-if="showLoader">Loading News ...</div>
    <NewsFeed v-else :items="articles || []" :featured="featuredArticle" :related="relatedArticles" />
  </div>
</template>

<style scoped>
.filter-wrapper {
  background: white;
  border: 1px solid #cacaca;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
}
</style>