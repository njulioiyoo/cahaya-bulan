<script setup>
import { company, services } from '../data/company'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <p class="footer__statement">{{ company.tagline }}</p>
        <RouterLink to="/kontak" class="btn btn--light">Hubungi Kami →</RouterLink>
      </div>

      <div class="footer__grid">
        <div>
          <h4>Perusahaan</h4>
          <RouterLink to="/tentang">Tentang</RouterLink>
          <RouterLink to="/visi-misi">Visi & Misi</RouterLink>
          <RouterLink to="/kontak">Kontak</RouterLink>
        </div>
        <div>
          <h4>Layanan</h4>
          <RouterLink v-for="s in services" :key="s.id" :to="`/layanan#${s.id}`">{{ s.title }}</RouterLink>
        </div>
        <div>
          <h4>Email</h4>
          <a v-for="e in company.emails" :key="e.address" :href="`mailto:${e.address}`">{{ e.address }}</a>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© {{ year }} {{ company.name }}</span>
        <span>Bagian dari {{ company.group }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark);
  color: rgba(255, 255, 255, 0.6);
  padding: 96px 0 32px;
  font-size: 0.92rem;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  padding-bottom: 72px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.footer__statement {
  font-family: var(--display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--white);
  max-width: 22ch;
  margin: 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 56px 0;
}

.footer h4 {
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 18px;
}

.footer__grid a {
  display: block;
  color: var(--white);
  margin-bottom: 10px;
  transition: color 0.2s;
}

.footer__grid a:hover {
  color: var(--accent);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.82rem;
}

@media (max-width: 760px) {
  .footer__top,
  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
