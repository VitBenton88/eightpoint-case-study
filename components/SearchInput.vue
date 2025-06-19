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
  <form @submit.prevent="handleSubmit">
    <button type="submit">
      <Icon name="uil:search" />
    </button>
    <input
      v-model="query"
      name="search"
      type="search"
      required
      placeholder="Search the web or type a URL"
    >
  </form>
</template>

<style scoped>
form {
  display: flex;
  border: 1px solid #666; 
  border-radius: 25px;
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
}

button[type="submit"] {
	margin-right: 1rem;
	padding: 0;
	border: 0;
	outline: 0;
	cursor: pointer; 
	background: none;
}

input[type="search"] {
	border: none;  
	background-color: white;
	outline: none;
	padding-right: 10px;
  width: 100%;
}
</style>