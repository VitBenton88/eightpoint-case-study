<template>
  <Icon :name="name" :size="size" />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  }
})
</script>