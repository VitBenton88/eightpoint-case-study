<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <article>
        <h2>{{ item.title }}</h2>
        <p>{{ item.source }}</p>
        <p v-if="item.tag">{{ item.tag }}</p>
        <p>{{ item.timestamp }}</p>
      </article>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>