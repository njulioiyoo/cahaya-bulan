<script setup>
import { ref } from 'vue'
import CountUp from '../components/CountUp.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { useParallax } from '../composables/useParallax'
import { images } from '../data/company'
import { locale, useContent } from '../i18n'

const t = useContent()
const bg = ref(null)
useParallax(bg)
</script>

<template>
  <section class="banner hero">
    <div ref="bg" class="banner__bg">
      <img :src="images.stack" alt="Isotank" fetchpriority="high" />
    </div>

    <div :key="locale" class="container hero__inner">
      <div class="label fade-in" style="--d: 150ms"><b>{{ t.home.est }}</b> {{ t.company.group }}</div>
      <h1>
        <span v-for="(l, i) in t.home.heroLines" :key="l" class="line">
          <span :style="{ '--i': i }">{{ l }}</span>
        </span>
      </h1>
      <div class="hero__bottom">
        <p class="fade-in" style="--d: 800ms">{{ t.home.heroText }}</p>
        <RouterLink to="/layanan" class="btn btn--light fade-in" style="--d: 950ms">
          {{ t.common.viewServices }}
        </RouterLink>
      </div>
    </div>

    <div class="hero__scroll fade-in" style="--d: 1300ms" aria-hidden="true">
      <span>Scroll</span>
      <i />
    </div>
  </section>

  <section class="section stats-section">
    <div class="container">
      <dl class="stats">
        <div v-for="(s, i) in t.stats" :key="i" v-reveal="i * 100">
          <dt><CountUp :key="locale" :value="s.value" :locale="t.numberLocale" /></dt>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>01</b> {{ t.nav.aboutFull }}</div>
        <h2 class="h2">{{ t.home.aboutTitle }}</h2>
      </div>
      <div class="about">
        <div v-reveal:img class="about__media">
          <img :src="images.trailer" alt="Isotank" class="photo" loading="lazy" />
        </div>
        <div v-reveal="150" class="about__text">
          <p class="about__lead">{{ t.home.aboutLead }}</p>
          <p class="text-muted">{{ t.home.aboutText }}</p>
          <RouterLink to="/tentang" class="link-arrow">{{ t.common.companyProfile }}</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--white">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>02</b> {{ t.nav.services }}</div>
        <h2 class="h2">{{ t.home.servicesTitle }}</h2>
      </div>
      <div class="services">
        <RouterLink
          v-for="(s, i) in t.services"
          :key="s.id"
          v-reveal="i * 100"
          :to="`/layanan#${s.id}`"
          class="service"
        >
          <span class="service__num">0{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.summary }}</p>
          <span class="service__arrow">→</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>03</b> {{ t.home.coverageLabel }}</div>
        <h2 class="h2">{{ t.home.coverageTitle }}</h2>
      </div>
      <div class="coverage">
        <ol>
          <li v-for="(c, i) in t.home.coverage" :key="i" v-reveal="i * 70">
            <span>{{ String(i + 1).padStart(2, '0') }}</span>{{ c }}
          </li>
        </ol>
        <div v-reveal:img="200" class="coverage__media">
          <img :src="images.rail" alt="Isotank" class="photo" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <section class="banner asean">
    <div class="banner__bg banner__bg--static">
      <img :src="images.yard" alt="" loading="lazy" />
    </div>
    <div class="container">
      <div v-reveal class="label"><b>04</b> {{ t.home.aseanLabel }}</div>
      <h2 v-reveal="100" class="asean__title">{{ t.home.aseanTitle }}</h2>
      <p v-reveal="200" class="asean__text">{{ t.home.aseanText }}</p>
    </div>
  </section>

  <CtaBanner />
</template>

<style scoped>
.hero {
  height: 100svh;
  min-height: 600px;
}

.hero__inner {
  padding-bottom: 96px;
}

.hero h1 {
  margin: 24px 0 40px;
  font-size: clamp(3.2rem, 10vw, 9.5rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
}

.hero__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
}

.hero__bottom p {
  max-width: 440px;
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
}

.hero__scroll {
  position: absolute;
  right: 32px;
  bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}

.hero__scroll i {
  position: relative;
  width: 1px;
  height: 64px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.hero__scroll i::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--white);
  animation: scroll-line 2s var(--ease-inout) infinite;
}

@keyframes scroll-line {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.stats-section {
  padding: 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  border-bottom: 1px solid var(--line);
}

.stats > div {
  padding: 48px 24px 40px;
  border-right: 1px solid var(--line);
}

.stats > div:first-child {
  padding-left: 0;
}

.stats > div:last-child {
  border-right: 0;
}

.stats dt {
  font-family: var(--display);
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  letter-spacing: -0.03em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.stats dd {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: end;
}

.about__media {
  aspect-ratio: 4 / 3;
}

.about__lead {
  font-family: var(--display);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.35;
  letter-spacing: -0.015em;
  margin-bottom: 24px;
}

.services {
  position: relative;
  border-bottom: 1px solid var(--line);
}

.service {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 80px 1.2fr 1.5fr 40px;
  gap: 32px;
  align-items: baseline;
  padding: 40px 0;
  border-top: 1px solid var(--line);
}

.service h3 {
  font-size: clamp(1.4rem, 2.6vw, 2.2rem);
  transition: transform 0.5s var(--ease-out), color 0.3s;
}

.service:hover h3 {
  transform: translateX(16px);
  color: var(--accent);
}

.service__num {
  font-size: 0.85rem;
  color: var(--muted);
}

.service p {
  margin: 0;
  color: var(--muted);
}

.service__arrow {
  font-size: 1.4rem;
  justify-self: end;
  transition: transform 0.5s var(--ease-out);
}

.service:hover .service__arrow {
  transform: translateX(8px);
}

.coverage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.coverage ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

.coverage li {
  display: flex;
  gap: 24px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-family: var(--display);
  font-size: clamp(1.1rem, 1.8vw, 1.4rem);
}

.coverage li:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.coverage li span {
  flex: none;
  width: 24px;
  font-family: 'Inter', sans-serif;
  font-variant-numeric: tabular-nums;
  font-size: 0.8rem;
  color: var(--accent);
  padding-top: 6px;
}

.coverage__media {
  min-height: 360px;
}

.asean {
  min-height: 90svh;
  padding: 120px 0;
}

.banner__bg--static {
  inset: 0;
}

.banner__bg--static img {
  animation: none;
}

.asean__title {
  font-size: clamp(2.6rem, 7vw, 6.4rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
  max-width: 12ch;
  margin: 24px 0 32px;
}

.asean__text {
  max-width: 560px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.1rem;
  margin: 0;
}

@media (max-width: 860px) {
  .hero__inner {
    padding-bottom: 64px;
  }

  .hero__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .hero__scroll {
    display: none;
  }

  .about,
  .coverage {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .stats > div,
  .stats > div:first-child {
    padding: 28px 16px 24px 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .service {
    grid-template-columns: 40px 1fr;
    gap: 12px 16px;
  }

  .service p {
    grid-column: 2;
  }

  .service__arrow {
    display: none;
  }

  .coverage__media {
    min-height: 260px;
  }

  .asean {
    min-height: 70svh;
    padding: 80px 0;
  }
}
</style>
