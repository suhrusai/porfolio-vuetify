<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Icon from '@/components/Icon.vue'
import { education } from '@/lib/portfolio'
</script>

<template>
  <section id="education" class="scroll-mt-20 py-20 sm:py-28">
    <div class="container">
      <SectionHeading eyebrow="Education" title="Where I studied" />
      <div class="grid gap-5 md:grid-cols-2">
        <Card
          v-for="entry in education"
          :key="entry.CollegeName"
          class="flex items-center gap-5 p-6"
        >
          <div
            class="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-background"
          >
            <img
              :src="entry.logoSrc"
              :alt="`${entry.CollegeName} logo`"
              loading="lazy"
              class="h-full w-full object-contain p-1.5"
            />
          </div>
          <div class="min-w-0">
            <h3 class="font-semibold leading-snug">{{ entry.CollegeName }}</h3>
            <p class="mt-1 text-sm text-muted-foreground">{{ entry.DegreeName }}</p>
            <div
              class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground"
            >
              <span class="inline-flex items-center gap-1.5">
                <Icon name="graduation" :size="14" />
                {{ entry.GraducationMonth }} {{ entry.GraducationYear }}
              </span>
              <span v-if="entry.location" class="inline-flex items-center gap-1.5">
                <Icon name="mapPin" :size="14" />
                {{ entry.location }}
              </span>
              <span v-if="entry.gpa" class="inline-flex items-center gap-1.5">
                <Icon name="star" :size="14" />
                GPA {{ entry.gpa }}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
