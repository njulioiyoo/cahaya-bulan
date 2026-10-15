import { onBeforeUnmount, onMounted } from 'vue'

export function useParallax(target, factor = 0.35) {
  let frame = 0

  const update = () => {
    frame = 0
    const el = target.value
    if (!el) return
    const y = Math.min(window.scrollY, window.innerHeight * 1.2)
    el.style.transform = `translate3d(0, ${y * factor}px, 0)`
  }

  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(frame)
  })
}
