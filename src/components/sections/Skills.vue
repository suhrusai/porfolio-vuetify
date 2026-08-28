<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import { skills } from '@/lib/portfolio'
</script>

<template>
  <section id="skills" class="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
    <div class="container">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I work with"
        description="Technologies I reach for across the stack — from backend and data engineering to cloud and AI tooling."
      />
      <div class="grid gap-5 sm:grid-cols-2">
        <Card v-for="group in skills" :key="group.label" class="p-6">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {{ group.label }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <Badge v-for="item in group.items" :key="item" variant="secondary">
              {{ item }}
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
