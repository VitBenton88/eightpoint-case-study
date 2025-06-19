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
  list-style: none;
}
</style>