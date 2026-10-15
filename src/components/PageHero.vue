<script setup>
import { computed, ref } from 'vue'
import { useParallax } from '../composables/useParallax'

const props = defineProps({
  label: String,
  title: { type: String, required: true },
  subtitle: String,
  image: { type: String, required: true },
})

const words = computed(() => props.title.split(' '))
const bg = ref(null)
useParallax(bg)
</script>

<template>
  <section class="banner page-hero">
    <div ref="bg" class="banner__bg"><img :src="image" alt="" fetchpriority="high" /></div>
    <div class="container page-hero__inner">
      <div class="label fade-in" style="--d: 150ms">{{ label }}</div>
      <div class="page-hero__grid">
        <h1>
          <span v-for="(w, i) in words" :key="i" class="line">
            <span :style="{ '--i': i }">{{ w }}</span>
          </span>
        </h1>
        <p v-if="subtitle" class="fade-in">{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  min-height: 82svh;
}

.page-hero__inner {
  padding-bottom: 72px;
}

.page-hero__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;
  align-items: end;
  margin-top: 24px;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 5.4rem);
  line-height: 1;
  letter-spacing: -0.04em;
  max-width: 14ch;
}

h1 {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.24em;
}

p {
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

@media (max-width: 860px) {
  .page-hero {
    min-height: 72svh;
  }

  .page-hero__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .page-hero__inner {
    padding-bottom: 48px;
  }
}
</style>
