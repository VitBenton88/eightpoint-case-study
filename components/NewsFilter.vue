<script setup>
import { ref, computed } from 'vue'
import { useAsyncData } from '#app'
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
const featuredArticle = computed(() => {
  return articles.value?.find(article => article.isFeatured) || {}
})

const { data: articles } = await useAsyncData(
  'articles',
  () => $fetch('/api/news', {
    query: { category: selectedTab.value }
  }),
  { watch: [selectedTab] }
)

const selectTab = tabId => selectedTab.value = tabId
</script>

<template>
  <div class="filter-wrapper">
    <TabNav :tabs :selected-tab @select-tab="selectTab" />
    <NewsFeed :items="articles" :featured="featuredArticle" />
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