<template>
  <main>
    <NuxtRouteAnnouncer />
    <div class="search">
      <SearchInput />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
}

.search {
  padding: 1rem;
}
</style>