<script setup lang="ts">
import { computed } from 'vue'
import Card from '@/components/ui/Card.vue'
import Separator from '@/components/ui/Separator.vue'
import Icon from '@/components/Icon.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import type { ProjectEntry } from '@/lib/portfolio'

const props = defineProps<{ project: ProjectEntry; reversed?: boolean }>()

const hasImages = computed(() => (props.project.images?.length ?? 0) > 0)
</script>

<template>
  <Card class="overflow-hidden">
    <div
      class="grid gap-0"
      :class="[
        hasImages ? 'lg:grid-cols-2' : '',
        hasImages && reversed ? 'lg:[&>*:first-child]:order-2' : '',
      ]"
    >
      <div v-if="hasImages" class="bg-muted/40 p-5 sm:p-6">
        <ImageCarousel :images="project.images" :alt="project.name" />
      </div>

      <div class="flex flex-col p-6 sm:p-8">
        <h3 class="text-xl font-semibold tracking-tight">{{ project.name }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
          {{ project.description }}
        </p>

        <ul
          v-if="project.highlights?.length"
          class="mt-4 space-y-2 text-sm text-muted-foreground"
        >
          <li
            v-for="(h, hi) in project.highlights"
            :key="hi"
            class="relative pl-5"
          >
            <span class="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
            {{ h }}
          </li>
        </ul>

        <div class="mt-5 space-y-2">
          <div
            v-for="(techs, category) in project.techstack"
            :key="category"
            class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
          >
            <span class="font-medium text-foreground">{{ category }}:</span>
            <span class="text-muted-foreground">{{ techs.join(', ') }}</span>
          </div>
        </div>

        <template v-if="project.links?.length">
          <Separator class="my-6" />
          <div class="flex flex-wrap gap-2">
            <a
              v-for="link in project.links"
              :key="link.src"
              :href="link.src"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {{ link.displayText }}
              <Icon name="arrowUpRight" :size="13" />
            </a>
          </div>
        </template>
      </div>
    </div>
  </Card>
</template>
