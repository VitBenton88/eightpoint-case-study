<template>
  <main>
    <NuxtRouteAnnouncer />
    <SearchInput />
    <QuickLinks />
    <NewsFilter />
  </main>
</template>

<style>
body {
  background: #f2f2f2;
}

main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 1rem 1rem;
}
</style>