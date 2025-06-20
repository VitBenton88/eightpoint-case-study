<script setup>
import NewsArticle from '@/components/NewsArticle.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <NewsArticle :article="item" />
    </li>
  </ul>
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

@media (max-width: 600px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>