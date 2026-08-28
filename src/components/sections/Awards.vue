<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Icon from '@/components/Icon.vue'
import { awards } from '@/lib/portfolio'
</script>

<template>
  <section id="awards" class="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
    <div class="container">
      <SectionHeading
        eyebrow="Awards"
        title="Honors & recognition"
        description="Moments where the work stood out."
      />
      <div class="grid gap-5 sm:grid-cols-2">
        <Card v-for="award in awards" :key="award.title" class="flex gap-4 p-6">
          <span
            class="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"
          >
            <Icon name="star" :size="18" />
          </span>
          <div class="min-w-0">
            <h3 class="font-semibold leading-snug">{{ award.title }}</h3>
            <p class="mt-0.5 text-sm font-medium text-muted-foreground">
              {{ award.issuer }}
            </p>
            <p class="mt-2 text-sm text-muted-foreground">{{ award.description }}</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
