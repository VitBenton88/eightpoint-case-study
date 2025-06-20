<template>
  <main>
    <NuxtRouteAnnouncer />
    <SearchInput />
    <QuickLinks />
    <NewsFilter />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  background: #f2f2f2;
  font-family: 'Roboto', sans-serif;
}

main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 1rem 1rem;
}
</style>