<script setup>
import { locale } from '../i18n'

const options = [
  { value: 'id', label: 'ID' },
  { value: 'en', label: 'EN' },
]

const select = (value) => {
  locale.value = value
}
</script>

<template>
  <div class="lang" role="group" aria-label="Language">
    <button
      v-for="o in options"
      :key="o.value"
      type="button"
      :class="{ active: locale === o.value }"
      :aria-pressed="locale === o.value"
      @click="select(o.value)"
    >
      {{ o.label }}
    </button>
  </div>
</template>

<style scoped>
.lang {
  display: flex;
  align-items: center;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
}

button {
  font: inherit;
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 4px 6px;
  opacity: 0.5;
  transition: opacity 0.2s;
}

button + button {
  border-left: 1px solid currentColor;
}

button:hover,
button.active {
  opacity: 1;
}

button.active {
  font-weight: 600;
}
</style>
