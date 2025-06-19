<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
    default: {
      image: '',
      source: '',
      tag: '',
      timestamp: '',
      title: '',
    }
  }
})
</script>

<template>
  <article>
    <img :src="article.image" :alt="article.title">
    <h2>{{ article.title }}</h2>
    <p>{{ article.source }}</p>
    <p v-if="article.tag">{{ article.tag }}</p>
    <p>{{ article.timestamp }}</p>
  </article>
</template>