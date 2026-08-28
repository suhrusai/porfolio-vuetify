<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/Icon.vue'
import {
  PROFILE_IMAGE,
  RESUME_URL,
  socials,
  socialIconName,
  socialLabel,
} from '@/lib/portfolio'
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28 sm:pt-36">
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)_/_0.12),transparent_70%)]"
    />
    <div class="container">
      <div class="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div class="animate-fade-in-up">
          <Badge variant="outline" class="mb-5 gap-2 border-border">
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"
              />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </Badge>

          <h1 class="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Sai Suhrut Sala
          </h1>
          <p class="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
            Software Engineer
          </p>
          <p class="mt-5 max-w-xl text-pretty text-muted-foreground">
            Full-stack engineer building efficient, user-centric products with C#, .NET
            and Vue.js. Currently at Goldman Sachs, working on data-platform
            modernisation.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#contact"> Get in touch </Button>
            <Button
              as="a"
              :href="RESUME_URL"
              target="_blank"
              rel="noopener"
              variant="outline"
            >
              <Icon name="file" :size="16" />
              Download résumé
            </Button>
          </div>

          <div class="mt-8 flex items-center gap-2">
            <a
              v-for="s in socials"
              :key="s.hyperlink"
              :href="s.hyperlink"
              target="_blank"
              rel="noopener"
              :aria-label="socialLabel(s.logo)"
              class="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon :name="socialIconName(s.logo)" :size="18" />
            </a>
          </div>
        </div>

        <div class="animate-fade-in-up justify-self-center md:justify-self-end">
          <div class="relative">
            <div
              class="absolute -inset-3 -z-10 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-2xl"
            />
            <img
              :src="PROFILE_IMAGE"
              alt="Portrait of Sai Suhrut Sala"
              loading="eager"
              width="288"
              height="288"
              class="h-56 w-56 rounded-full border-4 border-background object-cover shadow-xl ring-1 ring-border sm:h-72 sm:w-72"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
