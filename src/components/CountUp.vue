<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  value: { type: String, required: true },
  locale: { type: String, default: 'id-ID' },
})

const match = props.value.match(/^([\d.,]+)(.*)$/)
const target = match ? Number(match[1].replace(/[.,]/g, '')) : null
const suffix = match ? match[2] : ''
const format = (n) => n.toLocaleString(props.locale)

const display = ref(target === null ? props.value : `0${suffix}`)
const el = ref(null)
let io

onMounted(() => {
  if (target === null) return
  io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    io.disconnect()
    const start = performance.now()
    const duration = 1600
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      display.value = `${format(Math.round(target * eased))}${suffix}`
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  io.observe(el.value)
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <span ref="el">{{ display }}</span>
</template>
