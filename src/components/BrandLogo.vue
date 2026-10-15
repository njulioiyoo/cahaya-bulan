<template>
  <span class="brand">
    <span class="brand__mark" aria-hidden="true" />
    <span class="brand__text">Cahaya Bulan<span>Warisan Kontena</span></span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand__mark {
  width: 22px;
  height: 22px;
  border: 4px solid var(--accent);
}

.brand__text {
  font-family: var(--display);
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
  line-height: 1;
}

.brand__text span {
  font-weight: 400;
  opacity: 0.55;
  margin-left: 6px;
}

@media (max-width: 480px) {
  .brand__text span {
    display: none;
  }
}
</style>
