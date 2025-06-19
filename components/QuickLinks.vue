<script setup>
import Link from './Link.vue';
</script>

<template>
  <nav>
    <ul>
      <li>
        <Link href="https://facebook.com" target="_blank" aria-label="Visit Facebook">
        <Icon name="uil:facebook" size="32" />
        </Link>
      </li>
      <li>
        <Link href="https://youtube.com" target="_blank" aria-label="Visit YouTube">
        <Icon name="uil:youtube" size="32" />
        </Link>
      </li>
      <li>
        <Link href="https://spotify.com" target="_blank" aria-label="Visit Spotify">
        <Icon name="uil:music" size="32" />
        </Link>
      </li>
      <li>
        <Link href="https://dribbble.com" target="_blank" aria-label="Visit Dribble">
        <Icon name="uil:dribbble" size="32" />
        </Link>
      </li>
      <li>
        <Link href="https://paypal.com" target="_blank" aria-label="Visit PayPal">
        <Icon name="uil:paypal" size="32" />
        </Link>
      </li>
      <li>
        <button type="button">
          <Icon name="uil:plus" size="32" />
        </button>
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
  flex-wrap: wrap;
}

li:not(:last-of-type) {
  margin-right: .5em;
}

button {
  cursor: pointer;
}
</style>