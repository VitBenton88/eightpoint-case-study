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
  <div class="feed">
    <ul>
      <li v-for="item in items" :key="item.id">
        <NewsArticle :article="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.feed {
  max-width: 900px;
  width: 100%;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(190px - 1rem), 1fr));
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>