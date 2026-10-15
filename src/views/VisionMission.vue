<script setup>
import CtaBanner from '../components/CtaBanner.vue'
import PageHero from '../components/PageHero.vue'
import { company, images, missions, values, vision } from '../data/company'
</script>

<template>
  <PageHero label="Visi & Misi" title="Arah dan komitmen kami." :subtitle="company.tagline" :image="images.inspection" />

  <section class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>01</b> Visi</div>
        <blockquote class="vision">{{ vision }}</blockquote>
      </div>
    </div>
  </section>

  <section class="section section--white">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>02</b> Misi</div>
        <h2 class="h2">Langkah kami mewujudkan visi.</h2>
      </div>
      <ol class="missions">
        <li v-for="(m, i) in missions" :key="m" v-reveal="(i % 2) * 120">
          <span>{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ m }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="section section--dark">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>03</b> Komitmen</div>
        <p class="commitment__intro">
          {{ company.name }} bersama {{ company.group }} berkomitmen memberikan solusi transportasi
          yang:
        </p>
      </div>
      <ul class="values">
        <li v-for="(v, i) in values" :key="v" v-reveal="i * 90">{{ v }}</li>
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
