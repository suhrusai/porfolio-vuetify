<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number | string
  }>(),
  { size: 20 },
)

// Stroke-based icons (Lucide-style geometry) rendered inline — no icon dependency.
const paths: Record<string, string> = {
  github:
    'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C3 4 2 4 2 4c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 1 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M6 18c-4.51 2-5-2-7-2',
  linkedin:
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z|circle:4:4:2',
  mail: 'M22 5H2v14h20zM2 5l10 7 10-7',
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  external: 'M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
  sun: 'M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M3 12h1M20 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7|circle:12:12:4',
  moon: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z',
  arrowUp: 'M12 19V5M5 12l7-7 7 7',
  arrowUpRight: 'M7 7h10v10M7 17 17 7',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M18 6 6 18M6 6l12 12',
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  chevronLeft: 'M15 18l-6-6 6-6',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
  mapPin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z|circle:12:10:3',
  briefcase:
    'M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  graduation: 'M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5',
}

const parts = computed(() => (paths[props.name] ?? '').split('|'))
const dPaths = computed(() => parts.value.filter((p) => !p.startsWith('circle:')))
const circles = computed(() =>
  parts.value
    .filter((p) => p.startsWith('circle:'))
    .map((p) => {
      const [, cx, cy, r] = p.split(':')
      return { cx, cy, r }
    }),
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(d, i) in dPaths" :key="i" :d="d" />
    <circle v-for="(c, i) in circles" :key="`c-${i}`" :cx="c.cx" :cy="c.cy" :r="c.r" />
  </svg>
</template>
