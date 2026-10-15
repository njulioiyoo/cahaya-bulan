<script setup>
import PageHero from '../components/PageHero.vue'
import { emails, images } from '../data/company'
import { locale, useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <PageHero
    :key="locale"
    :label="t.nav.contact"
    :title="t.contact.title"
    :subtitle="t.contact.subtitle"
    :image="images.truckRed"
  />

  <section class="section section--white">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>01</b> {{ t.common.email }}</div>
        <h2 class="h2">{{ t.contact.emailTitle }}</h2>
      </div>

      <div class="emails">
        <a
          v-for="(e, i) in emails"
          :key="e.address"
          v-reveal="i * 120"
          :href="`mailto:${e.address}`"
          class="email"
        >
          <span class="label">{{ t.common.emailLabels[e.key] }}</span>
          <span class="email__address">{{ e.address }}</span>
          <span class="email__arrow">→</span>
        </a>
      </div>

      <p v-reveal class="area text-muted">{{ t.contact.area }}</p>
    </div>
  </section>
</template>

<style scoped>
.emails {
  border-bottom: 1px solid var(--line);
}

.email {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  position: relative;
  padding-right: 48px;
  align-items: baseline;
  padding: 40px 0;
  border-top: 1px solid var(--line);
}

.email__address {
  font-family: var(--display);
  font-size: clamp(1.5rem, 3.4vw, 2.8rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  word-break: break-word;
  transition: transform 0.5s var(--ease-out), color 0.3s;
}

.email__arrow {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.8rem;
  font-size: 1.4rem;
  transition: transform 0.5s var(--ease-out);
}

.email:hover .email__address {
  transform: translateX(16px);
  color: var(--accent);
}

.email:hover .email__arrow {
  transform: translateX(8px);
}

.area {
  margin: 32px 0 0;
}

@media (max-width: 860px) {
  .email {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 28px 0;
    padding-right: 0;
  }

  .email__arrow {
    display: none;
  }
}
</style>
