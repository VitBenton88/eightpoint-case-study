<script setup>
import Link from './Link.vue';
</script>

<template>
  <nav>
    <ul>
      <li>
        <Link href="https://facebook.com" target="_blank">
          <Icon name="uil:facebook" size="24" />
        </Link>
      </li>
      <li>
        <Link href="https://youtube.com" target="_blank">
          <Icon name="uil:youtube" size="24" />
        </Link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
}

li:not(:last-of-type) {
  margin-right: .5em;
}
</style>