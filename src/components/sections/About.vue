<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import { overview } from '@/lib/portfolio'

const highlights = [
  { value: '3+', label: 'Years building production software' },
  { value: '1.8TB+', label: 'Financial data migrated at Goldman Sachs' },
  { value: '99.99%', label: 'Service uptime delivered at FactSet' },
]
</script>

<template>
  <section id="about" class="scroll-mt-20 py-20 sm:py-28">
    <div class="container">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div class="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <p class="text-lg leading-relaxed text-muted-foreground">
          {{ overview }}
        </p>
        <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Card
            v-for="h in highlights"
            :key="h.label"
            class="flex flex-col justify-center p-5"
          >
            <span class="text-3xl font-bold text-primary">{{ h.value }}</span>
            <span class="mt-1 text-sm text-muted-foreground">{{ h.label }}</span>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
