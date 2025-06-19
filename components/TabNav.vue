<script setup>
defineProps({
  selectedTab: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['selectTab']);

const handleClick = tab => emit('selectTab', tab)
</script>

<template>
  <div class="tabs">
    <nav class="tab-buttons">
      <button v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === tab.id }"
        @click="handleClick(tab.id)">
        {{ tab.label }}
      </button>
    </nav>
  </div>
</template>

<style scoped>
.tab-buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 5rem;
  flex-wrap: wrap;
}

.tab-buttons button {
  padding: 0.5rem 1rem;
  background: #eee;
  border: none;
  cursor: pointer;
}

.tab-buttons button.active {
  background: #333;
  color: white;
}

.tab-content {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>