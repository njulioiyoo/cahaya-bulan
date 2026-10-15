<script setup>
import { useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <section class="section section--white">
    <div class="container cta">
      <h2 v-reveal>{{ t.cta.title }}</h2>
      <div v-reveal="150">
        <p class="text-muted">{{ t.cta.text }}</p>
        <RouterLink to="/kontak" class="btn">{{ t.common.contactUs }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  align-items: end;
}

h2 {
  font-size: clamp(2rem, 4.2vw, 3.6rem);
  max-width: 18ch;
}

p {
  margin-bottom: 24px;
}

@media (max-width: 860px) {
  .cta {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
