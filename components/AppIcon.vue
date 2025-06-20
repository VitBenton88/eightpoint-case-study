<script setup>
defineProps({
  color: {
    type: String,
    default: ''
  },
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
    <Icon :name="name" :size="size" :style="{ color }" />
  </div>
</template>