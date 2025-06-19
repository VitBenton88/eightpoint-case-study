<script setup>
defineProps({
  href: { type: String, required: true },
  target: { type: String, default: '_self' },
  rel: { type: String, default: 'noopener noreferrer' }
})
</script>

<template>
  <a :href="href" :target="target" :rel="rel" v-bind="$attrs">
    <slot />
  </a>
</template>

<style scoped>
a {
  color: black;
}
</style>