<script setup>
import { computed } from 'vue'
import NewsArticle from '@/components/NewsArticle.vue'

const { items, featured } = defineProps({
  featured: {
    type: Object,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const filteredItems = computed(() => {
  return items?.filter(item => item.id !== featured?.id)
})
</script>

<template>
  <ul v-if="filteredItems.length" :class="{ hasFeatured: featured?.id }">
    <li v-if="featured?.id">
      <NewsArticle :article="featured" :is-featured="true" />
    </li>
    <li v-for="item in filteredItems" :key="item.id">
      <NewsArticle :article="item" />
    </li>
  </ul>
  <p v-else>No news articles to display.</p>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(340px - 1rem), 1fr));
  gap: 1rem;
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
}

ul.hasFeatured {
  grid-template-columns: repeat(auto-fit, minmax(calc(340px - 1rem), 1fr));
}

ul.hasFeatured>li:first-child {
  grid-column: span 2;
}

@media (max-width: 600px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>