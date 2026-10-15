<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useContent } from './i18n'

const route = useRoute()
const t = useContent()

watchEffect(() => {
  const title = t.value.nav[route.meta.title] ?? ''
  document.title = `${title} | ${t.value.company.name}`
})
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
