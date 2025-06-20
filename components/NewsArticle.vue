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
  },
  isFeatured: {
    type: Boolean,
    default: () => false
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
  <article 
    :class="{ featured: isFeatured, hasFeaturedTag: isFeatured && article.tag }"
    :style="isFeatured ? { backgroundImage: `url(${article.image})` } : {}"
  >
    <img v-if="!isFeatured" :src="article.image" :alt="article.title">
    <p 
      v-if="isFeatured && article.tag" 
      class="article-tag"
    >
      {{ article.tag }}
    </p>
    <div class="details">
      <div class="summary">
        <AnchorLink :href="article.href" target="_blank" :aria-label="article.title">
          <h2>{{ truncateHeading(article.title) }}</h2>
        </AnchorLink>
        <p>{{ article.source }}</p>
        <p>{{ article.timestamp }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  border: solid 1px #ddd;
  border-radius: 10px;
  overflow: hidden;
  min-height: calc(340px - 1rem);
  height: 100%;
}

.featured {
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
}

.featured.hasFeaturedTag {
  justify-content: space-between;
}

.featured .article-tag {
  margin: 0;
}

.featured h2,
.featured p {
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.details {
  padding: 0 .5em;
}

.featured .details {
  padding: 0;
}

img {
  min-height: 170px;
  width: 100%;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 16px;
}
</style>