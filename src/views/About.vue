<script setup>
import CountUp from '../components/CountUp.vue'
import CtaBanner from '../components/CtaBanner.vue'
import PageHero from '../components/PageHero.vue'
import { images } from '../data/company'
import { locale, useContent } from '../i18n'

const t = useContent()
</script>

<template>
  <PageHero
    :key="locale"
    :label="t.nav.aboutFull"
    :title="t.about.title"
    :subtitle="t.about.subtitle"
    :image="images.trailer"
  />

  <section class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>01</b> {{ t.about.profileLabel }}</div>
        <h2 class="h2">{{ t.about.profileTitle }}</h2>
      </div>
      <div v-reveal="100" class="profile">
        <p class="profile__lead">{{ t.about.profileLead }}</p>
        <div class="text-muted">
          <p v-for="(p, i) in t.about.profileText" :key="i">{{ p }}</p>
        </div>
      </div>

      <dl class="stats">
        <div v-for="(s, i) in t.stats" :key="i" v-reveal="i * 100">
          <dt><CountUp :key="locale" :value="s.value" :locale="t.numberLocale" /></dt>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="section section--white">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>02</b> {{ t.about.journeyLabel }}</div>
        <h2 class="h2">{{ t.about.journeyTitle }}</h2>
      </div>
      <ol class="timeline">
        <li v-for="(m, i) in t.about.milestones" :key="i" v-reveal="i * 120">
          <span class="timeline__when">{{ m.when }}</span>
          <h3>{{ m.title }}</h3>
          <p>{{ m.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>03</b> {{ t.about.aseanLabel }}</div>
        <h2 class="h2">{{ t.about.aseanTitle }}</h2>
      </div>
      <div v-reveal="100" class="profile">
        <p class="profile__lead">{{ t.about.aseanLead }}</p>
        <div class="dim">
          <p v-for="(p, i) in t.about.aseanText" :key="i">{{ p }}</p>
        </div>
      </div>
    </div>
  </section>

  <CtaBanner />
</template>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}

.profile__lead {
  font-family: var(--display);
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  line-height: 1.35;
  letter-spacing: -0.015em;
}

.dim {
  color: rgba(255, 255, 255, 0.6);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 80px 0 0;
  border-top: 1px solid var(--line);
}

.stats > div {
  padding: 32px 24px 0;
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
  font-size: clamp(2rem, 3.6vw, 3rem);
  letter-spacing: -0.03em;
  line-height: 1;
}

.stats dd {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid var(--ink);
}

.timeline li {
  padding: 24px 24px 0 0;
  position: relative;
}

.timeline li::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 0;
  width: 9px;
  height: 9px;
  background: var(--accent);
}

.timeline__when {
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}

.timeline h3 {
  font-size: 1.25rem;
  margin: 12px 0 10px;
}

.timeline p {
  color: var(--muted);
  font-size: 0.92rem;
  margin: 0;
}

@media (max-width: 960px) {
  .profile {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .stats > div,
  .stats > div:first-child {
    padding: 24px 16px 20px 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .timeline {
    grid-template-columns: 1fr;
    border-top: 0;
    border-left: 1px solid var(--ink);
  }

  .timeline li {
    padding: 0 0 36px 28px;
  }

  .timeline li::before {
    top: 6px;
    left: -5px;
  }
}
</style>
