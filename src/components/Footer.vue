<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { socials, socialIconName, socialLabel } from '@/lib/portfolio'

const year = new Date().getFullYear()

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="border-t border-border py-10">
    <div
      class="container flex flex-col items-center justify-between gap-4 sm:flex-row"
    >
      <p class="text-sm text-muted-foreground">
        &copy; {{ year }} Sai Suhrut Sala. Built with Vue &amp; Tailwind CSS.
      </p>
      <div class="flex items-center gap-1">
        <a
          v-for="s in socials"
          :key="s.hyperlink"
          :href="s.hyperlink"
          :target="s.hyperlink.startsWith('mailto:') ? undefined : '_blank'"
          rel="noopener"
          :aria-label="socialLabel(s.logo)"
          class="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Icon :name="socialIconName(s.logo)" :size="17" />
        </a>
        <button
          type="button"
          aria-label="Back to top"
          class="ml-1 grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          @click="toTop"
        >
          <Icon name="arrowUp" :size="17" />
        </button>
      </div>
    </div>
  </footer>
</template>
