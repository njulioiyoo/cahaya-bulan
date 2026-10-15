import { computed, ref, watch } from 'vue'
import { content } from './data/company'

const STORAGE_KEY = 'lang'

const initial = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && content[saved]) return saved
  return 'id'
}

export const locale = ref(initial())

watch(
  locale,
  (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value
  },
  { immediate: true },
)

const current = computed(() => content[locale.value])

export const useContent = () => current
