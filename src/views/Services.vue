<script setup>
import CtaBanner from '../components/CtaBanner.vue'
import PageHero from '../components/PageHero.vue'
import { images } from '../data/company'
import { locale, useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <PageHero
    :key="locale"
    :label="t.nav.services"
    :title="t.servicesPage.title"
    :subtitle="t.servicesPage.subtitle"
    :image="images.stack"
  />

  <section
    v-for="(s, i) in t.services"
    :id="s.id"
    :key="s.id"
    class="section service"
    :class="{ 'section--white': i % 2 === 0 }"
  >
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>0{{ i + 1 }}</b> {{ t.common.service }}</div>
        <h2 class="h2">{{ s.title }}</h2>
      </div>
      <div class="service__grid" :class="{ 'service__grid--flip': i % 2 === 1 }">
        <div v-reveal:img class="service__media">
          <img :src="s.image" :alt="s.title" class="photo" loading="lazy" />
        </div>
        <div v-reveal="150">
          <p v-for="(p, j) in s.body" :key="j" :class="j === 0 ? 'service__lead' : 'text-muted'">
            {{ p }}
          </p>
          <h4 class="service__points-title">{{ s.pointsTitle }}</h4>
          <ul class="service__points">
            <li v-for="p in s.points" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <CtaBanner />
</template>

<style scoped>
.service {
  scroll-margin-top: 72px;
}

.service__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.service__grid--flip .service__media {
  order: 2;
}

.service__media {
  aspect-ratio: 4 / 5;
  max-height: 620px;
}

.service__lead {
  font-family: var(--display);
  font-size: clamp(1.2rem, 1.8vw, 1.45rem);
  line-height: 1.4;
  letter-spacing: -0.015em;
}

.service__points-title {
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 40px 0 12px;
}

.service__points {
  list-style: none;
  margin: 0;
  padding: 0;
}

.service__points li {
  padding: 14px 0;
  border-top: 1px solid var(--line);
}

.service__points li:last-child {
  border-bottom: 1px solid var(--line);
}

@media (max-width: 860px) {
  .service__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .service__grid--flip .service__media {
    order: 0;
  }

  .service__media {
    aspect-ratio: 4 / 3;
  }
}
</style>
