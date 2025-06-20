<script setup>
import { ref } from 'vue'
import AnchorLink from './AnchorLink.vue';
import AppIcon from './AppIcon.vue';

const rootRef = ref(null)

useIntersectionObserver(rootRef, (entry) => {
  console.log('tile_shown event:', entry.target)
})

defineProps({
  articles: {
    type: Array,
    required: true
  }
})

const truncateHeading = text => {
  const maxLength = 50

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
  <section ref="rootRef">
    <header>
      <h2>Related Stories</h2>
    </header>

    <ul>
      <li v-for="article in articles" :key="article.id">
        <article>
          <header>
            <span class="category">
              <AppIcon name="uil:sun" size="12" />
              {{ article.category }}
            </span>
            <span class="timestamp">{{ getReadableDate(article.timestamp) }}</span>
          </header>
          <AnchorLink 
            :href="article.href"
            target="_blank"
            :aria-label="article.title"
            @click="() => handleClick(article.title)"
          >
            <h3>{{ truncateHeading(article.title) }}</h3>
          </AnchorLink>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  border: solid 1px #ddd;
  border-radius: 10px;
  padding: 1rem;
  min-height: calc(340px - 1rem);
}

ul {
  margin-top: 3rem;
}

article header {
  display: flex;
  justify-content: space-between;
}

h2 {
  color: #338fd6;
  font-size: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  transition: color .3s;
}

a:hover {
  color: #3047fa;
}

li {
  margin-top: 1rem;
}

.timestamp {
  color: #979797;
}

.category {
  display: flex;
  gap: .5rem;
}
</style>