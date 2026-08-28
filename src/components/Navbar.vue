<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import Button from '@/components/ui/Button.vue'
import Icon from '@/components/Icon.vue'
import { RESUME_URL } from '@/lib/portfolio'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'repositories', label: 'Repos' },
  { id: 'contact', label: 'Contact' },
]

const active = ref<string>('about')
const scrolled = ref(false)
const menuOpen = ref(false)

let observer: IntersectionObserver | null = null

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function go(id: string) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  )
  sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer?.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="
      scrolled
        ? 'border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        : 'border-b border-transparent'
    "
  >
    <div class="container flex h-16 items-center justify-between gap-4">
      <a
        href="#top"
        class="flex items-center gap-2 font-semibold tracking-tight"
        @click.prevent="go('top')"
      >
        <span
          class="grid h-8 w-8 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground"
        >
          SS
        </span>
        <span class="hidden sm:inline">Sai Suhrut Sala</span>
      </a>

      <nav class="hidden items-center gap-1 lg:flex">
        <button
          v-for="s in sections"
          :key="s.id"
          class="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          :class="{ 'text-foreground': active === s.id }"
          @click="go(s.id)"
        >
          {{ s.label }}
        </button>
      </nav>

      <div class="flex items-center gap-1">
        <Button
          as="a"
          :href="RESUME_URL"
          target="_blank"
          rel="noopener"
          size="sm"
          class="hidden sm:inline-flex"
        >
          Resume
        </Button>
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          class="lg:hidden"
          aria-label="Toggle navigation menu"
          @click="menuOpen = !menuOpen"
        >
          <Icon :name="menuOpen ? 'close' : 'menu'" :size="20" />
        </Button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="menuOpen"
        class="border-b border-border bg-background lg:hidden"
      >
        <nav class="container flex flex-col py-2">
          <button
            v-for="s in sections"
            :key="s.id"
            class="rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            :class="{ 'text-foreground': active === s.id }"
            @click="go(s.id)"
          >
            {{ s.label }}
          </button>
          <Button
            as="a"
            :href="RESUME_URL"
            target="_blank"
            rel="noopener"
            size="sm"
            class="mt-2"
          >
            Resume
          </Button>
        </nav>
      </div>
    </transition>
  </header>
</template>
