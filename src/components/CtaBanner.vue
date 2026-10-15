<template>
  <section class="section section--white">
    <div class="container cta">
      <h2 v-reveal>Butuh transportasi kontainer atau logistik?</h2>
      <div v-reveal="150">
        <p class="text-muted">Ceritakan kebutuhan pengangkutan Anda, tim kami akan menghubungi Anda kembali.</p>
        <RouterLink to="/kontak" class="btn">Hubungi Kami →</RouterLink>
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
