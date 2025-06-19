<script setup>
import { ref } from 'vue'

const query = ref('')

const handleSubmit = () => {
  if (query.value.trim()) {
    const encoded = encodeURIComponent(query.value.trim())
    window.location.href = `https://search.yahoo.com/search?p=${encoded}`
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex justify-center mt-10">
    <input
      v-model="query"
      type="text"
      placeholder="Search the web or type a URL"
      class="w-full max-w-md p-3 border rounded"
    />
    <button type="submit" class="ml-2 px-4 py-3 bg-blue-600 text-white rounded">
      Search
    </button>
  </form>
</template>