<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import AnchorLink from './AnchorLink.vue'

const rootRef = ref(null)

useIntersectionObserver(rootRef, (entry) => {
  console.log('tile_shown event:', entry.target)
})

const { isFeatured } = defineProps({
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
  const maxLength = isFeatured ? 100 : 40

  if (!text) return ''
  return text.length > maxLength
    ? text.slice(0, maxLength).trim() + '...'
    : text
}

const getReadableDate = timestamp => new Date(timestamp).toLocaleString('en-US', {
  timeZone: 'UTC',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
})

const handleClick = title => {
  console.log('tile_clicked event:', title)
}
</script>

<template>
  <article
    ref="rootRef"
    :class="{ featured: isFeatured }"
    :style="isFeatured ? { backgroundImage: `url(${article.image})` } : {}"
  >
    <img v-if="!isFeatured" :src="article.image" :alt="article.title">
    <p v-if="article.tag" class="article-tag">
      {{ article.tag }}
    </p>
    <div class="details">
      <div class="summary">
        <p>{{ article.source }}</p>
        <AnchorLink
          :href="article.href"
          target="_blank"
          :aria-label="article.title"
          @click="() => handleClick(article.title)"
        >
          <h2>{{ truncateHeading(article.title) }}</h2>
        </AnchorLink>
        <p>{{ getReadableDate(article.timestamp) }}</p>
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
  position: relative;
  z-index: 5;
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

a,
h2 {
  transition: color .3s;
}

article a:hover {
  color: #3047fa;
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

.article-tag {
  color: white;
  position: absolute;
  left: .5rem;
  top: 0;
  z-index: 1;
}

.article-tag,
.featured h2,
.featured p {
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.featured a:hover h2 {
  color: #cbd1ff;
}

.featured h2 {
  font-size: 18px;
}

.details {
  padding: 0 .5em;
}

.featured .details {
  padding: 0;
}
</style>