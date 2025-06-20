<script setup>
import AnchorLink from './AnchorLink.vue';
import AppIcon from './AppIcon.vue';

const links = [
  { href: 'https://facebook.com', icon: 'uil:facebook', label: 'Facebook', color: '#1877F2' },
  { href: 'https://youtube.com', icon: 'uil:youtube', label: 'YouTube', color: '#FF0000' },
  { href: 'https://spotify.com', icon: 'icons:spotify-icon', label: 'Spotify' },
  { href: 'https://dribbble.com', icon: 'uil:dribbble', label: 'Dribble', color: '#ea4c89' },
  { href: 'https://paypal.com', icon: 'uil:paypal', label: 'PayPal', color: '#00457C' },
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.href" class="link-list-item">
        <AnchorLink :href="link.href" target="_blank" :aria-label="link.label" class="link">
          <div class="icon-wrap">
            <AppIcon :name="link.icon" size="32" :color="link.color" />
          </div>
          <span>{{ link.label }}</span>
        </AnchorLink>
      </li>
      <li class="action-list-item">
        <div class="icon-wrap">
          <button type="button" class="add-btn">
            <AppIcon name="uil:plus" size="32" />
          </button>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  max-width: 500px;
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: .25rem;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 0;
}

.icon-wrap {
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: .5rem;
  padding: 5px;
}

.action-list-item,
.link-list-item {
  margin-top: 1rem;
}

.link-list-item span {
  font-size: 12px;
}

.link-list-item .link {
  text-align: center;
  text-decoration: none;
}

.add-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color .3s;
}

.add-btn,
.link .icon-wrap {
  transition: background-color .3s;
}

.add-btn:hover,
.link:hover .icon-wrap {
  background-color: #f2f2f2;
}
</style>