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
      <button 
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: selectedTab === tab.id }"
        @click="handleClick(tab.id)"
      >
        {{ tab.label }}
      </button>
    </nav>
  </div>
</template>

<style scoped>
.tab-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 2rem 2rem 0;
}

.tab-buttons button {
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  border-bottom: solid 3px transparent;
  cursor: pointer;
  transition: border-bottom .3s;
}

.tab-buttons button.active {
  border-bottom-color: #3047fa;
}

.tab-content {
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>