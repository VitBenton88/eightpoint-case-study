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
  <div>
    <Icon :name="name" :size="size" />
  </div>
</template>