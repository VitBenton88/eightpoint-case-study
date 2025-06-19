<script setup>
import AnchorLink from './AnchorLink.vue';

defineProps({
  article: {
    type: Object,
    default: () => ({
      image: '',
      source: '',
      tag: '',
      timestamp: '',
      title: '',
    })
  }
})

const truncateHeading = text => {
  const maxLength = 40

  if (!text) return ''
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text
}
</script>

<template>
  <article>
    <img :src="article.image" :alt="article.title">
    <div class="details">
      <AnchorLink :href="article.href" target="_blank" :aria-label="article.title">
        <h2>{{ truncateHeading(article.title) }}</h2>
      </AnchorLink>
      <p>{{ article.source }}</p>
      <p v-if="article.tag">{{ article.tag }}</p>
      <p>{{ article.timestamp }}</p>
    </div>
  </article>
</template>

<style scoped>
article {
  border: solid 1px #ddd;
  border-radius: 10px;
  overflow: hidden;
}

.details {
  padding: 0 .5em;
}

img {
  width: 100%;
}

h2 {
  font-size: 16px;
}
</style>