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

<template>
  <Icon :name="name" :size="size" />
</template>