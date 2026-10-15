<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()

watch(
  () => route.meta.title,
  (title) => {
    document.title = `${title ?? ''} | PT Cahaya Bulan Warisan Kontena`
  },
  { immediate: true },
)
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
