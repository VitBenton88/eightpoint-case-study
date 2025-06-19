<script setup>
import { ref } from 'vue'
import { useAsyncData } from '#app'
import Feed from '@/components/Feed.vue'
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
  <TabNav :tabs :selected-tab @select-tab="selectTab" />
  <Feed :items="articles" />
</template>