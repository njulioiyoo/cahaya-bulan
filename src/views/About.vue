<script setup>
import CountUp from '../components/CountUp.vue'
import CtaBanner from '../components/CtaBanner.vue'
import PageHero from '../components/PageHero.vue'
import { company, images, stats } from '../data/company'

const milestones = [
  {
    when: '1980-an',
    title: 'Awal perjalanan',
    text: 'Grup Cahaya Bulan mulai beroperasi di bidang transportasi dan logistik di Indonesia.',
  },
  {
    when: '40+ tahun',
    title: 'Jaringan domestik yang luas',
    text: 'Membangun jaringan operasional di berbagai wilayah utama Indonesia dengan armada lebih dari 1.000 unit.',
  },
  {
    when: 'Kini',
    title: 'Fokus transportasi kontainer',
    text: `${company.name} hadir untuk melayani pengangkutan kontainer secara aman, efisien dan profesional.`,
  },
  {
    when: 'Terbaru',
    title: 'Investasi pengangkutan limbah',
    text: 'Diversifikasi usaha ke jasa transportasi pengangkutan limbah yang sesuai ketentuan lingkungan hidup.',
  },
  {
    when: 'Ke depan',
    title: 'Ekspansi ASEAN',
    text: 'Pengembangan bertahap ke pasar ASEAN bersama mitra strategis di masing-masing negara.',
  },
]
</script>

<template>
  <PageHero
    label="Tentang Kami"
    title="Berpengalaman sejak 1980-an."
    :subtitle="`${company.name} melanjutkan pengalaman lebih dari empat dekade ${company.group} di bidang transportasi dan logistik Indonesia.`"
    :image="images.trailer"
  />

  <section class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>01</b> Profil</div>
        <h2 class="h2">Fondasi kuat untuk transportasi kontainer Indonesia.</h2>
      </div>
      <div v-reveal="100" class="profile">
        <p class="profile__lead">
          {{ company.name }} merupakan bagian dari {{ company.group }}, sebuah kelompok usaha
          transportasi dan logistik yang telah beroperasi di Indonesia sejak tahun 1980-an.
        </p>
        <div class="text-muted">
          <p>
            Dengan pengalaman lebih dari empat dekade di bidang transportasi domestik, Grup Cahaya
            Bulan telah membangun jaringan operasional yang luas di berbagai wilayah Indonesia serta
            memiliki pengalaman dalam menangani berbagai kebutuhan transportasi darat dan logistik.
          </p>
          <p>
            Saat ini, Grup Cahaya Bulan didukung oleh lebih dari 1.000 unit kendaraan, mulai dari
            kendaraan dengan kapasitas sekitar 3 ton hingga kendaraan angkutan berat, yang digunakan
            untuk melayani berbagai kebutuhan transportasi dan distribusi di Indonesia.
          </p>
          <p>
            Pengalaman panjang tersebut menjadi fondasi utama bagi pengembangan {{ company.name }}
            sebagai perusahaan yang berfokus pada transportasi kontainer dan jasa logistik.
          </p>
        </div>
      </div>

      <dl class="stats">
        <div v-for="(s, i) in stats" :key="s.label" v-reveal="i * 100">
          <dt><CountUp :value="s.value" /></dt>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>
    </div>
  </section>

  <section class="section section--white">
    <div class="container">
      <div v-reveal class="section-head">
        <div class="label"><b>02</b> Perjalanan</div>
        <h2 class="h2">Tumbuh bersama kebutuhan transportasi Indonesia.</h2>
      </div>
      <ol class="timeline">
        <li v-for="(m, i) in milestones" :key="m.title" v-reveal="i * 120">
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
        <div class="label"><b>03</b> Regional ASEAN</div>
        <h2 class="h2">Jaringan logistik regional yang terintegrasi.</h2>
      </div>
      <div v-reveal="100" class="profile">
        <p class="profile__lead">
          Dengan Indonesia sebagai basis utama, {{ company.group }} memiliki visi untuk mengembangkan
          bisnis transportasi, logistik, transportasi kontainer dan pengangkutan limbah ke pasar ASEAN.
        </p>
        <div class="dim">
          <p>
            Pengembangan regional dilakukan secara bertahap dengan mempertimbangkan kondisi pasar,
            peraturan setempat, kebutuhan pelanggan serta peluang kerja sama dengan mitra strategis di
            masing-masing negara.
          </p>
          <p>
            Grup melihat peluang besar untuk membawa pengalaman dan kemampuan yang telah dibangun di
            Indonesia ke negara-negara ASEAN, sekaligus membangun jaringan transportasi dan logistik
            regional yang lebih terintegrasi.
          </p>
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
