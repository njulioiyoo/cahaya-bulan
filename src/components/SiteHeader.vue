<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import LangSwitch from './LangSwitch.vue'
import { useContent } from '../i18n'

const t = useContent()
const links = computed(() => [
  { to: '/tentang', label: t.value.nav.about },
  { to: '/layanan', label: t.value.nav.services },
  { to: '/visi-misi', label: t.value.nav.vision },
  { to: '/kontak', label: t.value.nav.contact },
])

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const hidden = ref(false)
let lastY = 0

const onScroll = () => {
  const y = window.scrollY
  scrolled.value = y > 40
  hidden.value = y > window.innerHeight * 0.6 && y > lastY && !open.value
  lastY = y
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header
    class="header"
    :class="{ 'header--solid': scrolled || open, 'header--hidden': hidden }"
  >
    <div class="container header__inner">
      <RouterLink to="/" aria-label="Beranda"><BrandLogo /></RouterLink>

      <div class="header__right">
        <nav class="nav" :class="{ 'nav--open': open }">
          <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
        </nav>

        <LangSwitch />

        <button class="toggle" :aria-expanded="open" @click="open = !open">
          {{ open ? t.nav.close : t.nav.menu }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  color: var(--white);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  transition:
    background 0.4s,
    color 0.4s,
    border-color 0.4s,
    transform 0.5s var(--ease-out);
}

.header--solid {
  background: rgba(245, 244, 239, 0.92);
  backdrop-filter: blur(12px);
  color: var(--ink);
  border-color: var(--line);
}

.header--hidden {
  transform: translateY(-100%);
}

.header__inner {
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav {
  display: flex;
  gap: 40px;
  font-size: 0.95rem;
}

.nav a {
  position: relative;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.nav a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s var(--ease-out);
}

.nav a:hover,
.nav a.router-link-active {
  opacity: 1;
}

.nav a:hover::after,
.nav a.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.toggle {
  display: none;
  font: inherit;
  font-size: 0.9rem;
  background: none;
  border: 1px solid currentColor;
  padding: 8px 14px;
  cursor: pointer;
  color: inherit;
}

@media (max-width: 960px) {
  .header__right,
  .nav {
    gap: 24px;
  }
}

@media (max-width: 760px) {
  .header__right {
    gap: 16px;
  }

  .toggle {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--paper);
    color: var(--ink);
    border-bottom: 1px solid var(--line);
    padding: 0 20px;
  }

  .nav--open {
    display: flex;
  }

  .nav a {
    padding: 18px 0;
    font-family: var(--display);
    font-size: 1.5rem;
    border-top: 1px solid var(--line);
  }

  .nav a::after {
    display: none;
  }
}
</style>
