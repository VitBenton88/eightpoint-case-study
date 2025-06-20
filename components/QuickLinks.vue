<script setup>
import AnchorLink from './AnchorLink.vue';
import AppIcon from './AppIcon.vue';

const links = [
  { href: 'https://facebook.com', icon: 'uil:facebook', label: 'Facebook' },
  { href: 'https://youtube.com', icon: 'uil:youtube', label: 'YouTube' },
  { href: 'https://spotify.com', icon: 'uil:music', label: 'Spotify' },
  { href: 'https://dribbble.com', icon: 'uil:dribbble', label: 'Dribble' },
  { href: 'https://paypal.com', icon: 'uil:paypal', label: 'Visit PayPal' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.href">
        <AnchorLink :href="link.href" target="_blank" :aria-label="link.label" class="links">
          <AppIcon :name="link.icon" size="32" />
          <span>{{ link.label }}</span>
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
  list-style: none;
  flex-wrap: wrap;
  margin: 3rem 0;
  padding: 0;
  width: 100%;
}

li:not(:last-of-type) {
  margin-right: .5em;
}

.links {
  text-align: center;
  text-decoration: none;
}

button {
  cursor: pointer;
}
</style>