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
    :label="t.nav.vision"
    :title="t.visionPage.title"
    :subtitle="t.company.tagline"
    :image="images.inspection"
  />

  <section class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>01</b> {{ t.visionPage.visionLabel }}</div>
        <blockquote class="vision">{{ t.vision }}</blockquote>
      </div>
    </div>
  </section>

  <section class="section section--white">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>02</b> {{ t.visionPage.missionLabel }}</div>
        <h2 class="h2">{{ t.visionPage.missionTitle }}</h2>
      </div>
      <ol class="missions">
        <li v-for="(m, i) in t.missions" :key="i" v-reveal="(i % 2) * 120">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ m }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>03</b> {{ t.visionPage.commitmentLabel }}</div>
        <p class="commitment__intro">{{ t.visionPage.commitmentIntro }}</p>
      </div>
      <ul class="values">
        <li v-for="(v, i) in t.values" :key="i" v-reveal="i * 90">{{ v }}</li>
      </ul>
    </div>
  </section>

  <CtaBanner />
</template>

<style scoped>
.section-head {
  margin-bottom: 0;
}

.section--white .section-head {
  margin-bottom: 56px;
}

.vision {
  margin: 0;
  font-family: var(--display);
  font-size: clamp(1.6rem, 3.2vw, 2.7rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.missions {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 64px;
}

.missions li {
  display: grid;
  grid-template-columns: 48px 1fr;
  padding: 24px 0;
  border-top: 1px solid var(--line);
}

.missions span {
  font-size: 0.85rem;
  color: var(--accent);
  padding-top: 3px;
}

.missions p {
  margin: 0;
  font-size: 1.1rem;
}

.commitment__intro {
  font-family: var(--display);
  font-size: clamp(1.3rem, 2.2vw, 1.8rem);
  line-height: 1.3;
  margin: 0;
  max-width: 30ch;
}

.values {
  list-style: none;
  margin: 72px 0 0;
  padding: 0;
}

.values li {
  font-family: var(--display);
  font-size: clamp(2.6rem, 8vw, 6.4rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  transition: color 0.2s;
}

.values li:hover {
  color: var(--accent);
}

@media (max-width: 860px) {
  .missions {
    grid-template-columns: 1fr;
  }
}
</style>
