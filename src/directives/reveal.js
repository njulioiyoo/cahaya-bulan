let observer

const getObserver = () => {
  observer ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

// v-reveal="delayMs" fades content up; v-reveal:img="delayMs" wipes an image in.
export default {
  mounted(el, { arg, value }) {
    el.classList.add(arg === 'img' ? 'reveal-img' : 'reveal')
    if (value) el.style.setProperty('--d', `${value}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
