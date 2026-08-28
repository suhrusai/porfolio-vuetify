<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/Icon.vue'
import { experiences, type ExperienceEntry } from '@/lib/portfolio'

function rows(exp: ExperienceEntry) {
  if (exp.positions?.length) return exp.positions
  return [
    {
      title: exp.role ?? '',
      startDate: exp.startDate ?? '',
      endDate: exp.endDate ?? null,
      summary: exp.summary,
      responsibilities: exp.responsibilities,
    },
  ]
}

function range(start?: string, end?: string | null) {
  if (!start) return ''
  return `${start} — ${end ?? 'Present'}`
}
</script>

<template>
  <section id="experience" class="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
    <div class="container">
      <SectionHeading
        eyebrow="Experience"
        title="Professional journey"
        description="Roles where I've shipped production software and led technical work."
      />

      <ol class="relative border-l border-border">
        <li
          v-for="exp in experiences"
          :key="exp.company"
          class="mb-12 ml-6 last:mb-0"
        >
          <span
            class="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-primary"
          />

          <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 class="text-lg font-semibold">{{ exp.company }}</h3>
            <p
              v-if="exp.location"
              class="inline-flex items-center gap-1 text-sm text-muted-foreground"
            >
              <Icon name="mapPin" :size="14" />
              {{ exp.location }}
            </p>
          </div>

          <div
            v-for="(pos, i) in rows(exp)"
            :key="i"
            :class="i > 0 ? 'mt-5 border-t border-dashed border-border pt-5' : 'mt-2'"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-x-3">
              <p class="font-medium text-foreground">{{ pos.title }}</p>
              <p class="text-sm font-medium text-muted-foreground">
                {{ range(pos.startDate, pos.endDate) }}
              </p>
            </div>
            <p v-if="pos.summary" class="mt-1.5 text-sm text-muted-foreground">
              {{ pos.summary }}
            </p>
            <ul
              v-if="pos.responsibilities?.length"
              class="mt-3 space-y-2 text-sm text-muted-foreground"
            >
              <li
                v-for="(r, ri) in pos.responsibilities"
                :key="ri"
                class="relative pl-5"
              >
                <span
                  class="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/60"
                />
                {{ r }}
              </li>
            </ul>
          </div>

          <div v-if="exp.tags?.length" class="mt-4 flex flex-wrap gap-2">
            <Badge v-for="tag in exp.tags" :key="tag" variant="outline">
              {{ tag }}
            </Badge>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
