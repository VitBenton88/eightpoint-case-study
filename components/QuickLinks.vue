<script setup>
import AnchorLink from './AnchorLink.vue';
import AppIcon from './AppIcon.vue';

const links = [
  { href: 'https://facebook.com', icon: 'uil:facebook', label: 'Visit Facebook' },
  { href: 'https://youtube.com', icon: 'uil:youtube', label: 'Visit YouTube' },
  { href: 'https://spotify.com', icon: 'uil:music', label: 'Visit Spotify' },
  { href: 'https://dribbble.com', icon: 'uil:dribbble', label: 'Visit Dribble' },
  { href: 'https://paypal.com', icon: 'uil:paypal', label: 'Visit PayPal' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.href">
        <AnchorLink :href="link.href" target="_blank" :aria-label="link.label">
          <AppIcon :name="link.icon" size="32" />
        </AnchorLink>
      </li>
      <li>
        <button type="button">
          <AppIcon name="uil:plus" size="32" />
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