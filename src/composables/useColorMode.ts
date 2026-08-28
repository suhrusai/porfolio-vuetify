import { onMounted, ref } from 'vue'

export type ColorMode = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'
const mode = ref<ColorMode>('light')

function apply(value: ColorMode) {
  const root = document.documentElement
  root.classList.toggle('dark', value === 'dark')
  root.style.colorScheme = value
}

function resolveInitial(): ColorMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ColorMode | null
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function initColorMode() {
  mode.value = resolveInitial()
  apply(mode.value)
}

export function useColorMode() {
  onMounted(() => {
    // keep in sync if init ran before hydration
    apply(mode.value)
  })

  function setMode(value: ColorMode) {
    mode.value = value
    apply(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
  }

  function toggle() {
    setMode(mode.value === 'dark' ? 'light' : 'dark')
  }

  return { mode, setMode, toggle }
}
