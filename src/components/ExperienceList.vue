<template>
  <div>
    <div v-for="(exp, i) in items" :key="i" class="li-entry">
      <v-row class="li-row" align="start">
        <v-col cols="12" md="3" class="li-left d-flex">
          <div class="logo-wrap">
            <!-- Uncomment to show logos: <v-img :src="resolveLogo(exp.logo)" :alt="`${exp.company} logo`" contain max-width="56" max-height="56" /> -->
          </div>
          <div class="company-meta">
            <div class="company-name">{{ exp.company }}</div>
            <div class="company-subtitle grey--text text--secondary">{{ exp.companySubtitle || exp.location || '' }}</div>
            <div class="company-range grey--text caption">{{ hasPositions(exp) ? overallRange(exp.positions) : formatRange(exp.startDate, exp.endDate) }}</div>
          </div>
        </v-col>

        <v-col cols="12" md="9" class="li-right">
          <div v-if="hasPositions(exp)">
            <div v-for="(pos, pi) in exp.positions" :key="pi" class="position">
              <div class="pos-head d-flex justify-space-between">
                <div>
                  <div class="pos-title">{{ pos.title }}</div>
                </div>
                <div class="pos-date caption grey--text">{{ formatRange(pos.startDate, pos.endDate) }}</div>
              </div>
              <div v-if="pos.summary" class="pos-summary grey--text">{{ pos.summary }}</div>
              <ul v-if="pos.responsibilities && pos.responsibilities.length" class="pos-list">
                <li v-for="(r, idx) in pos.responsibilities" :key="idx">{{ r }}</li>
              </ul>
            </div>
          </div>

          <div v-else>
            <div class="pos-head d-flex justify-space-between">
              <div>
                <div class="pos-title">{{ exp.role }}</div>
              </div>
              <div class="pos-date caption grey--text">{{ formatRange(exp.startDate, exp.endDate) }}</div>
            </div>
            <div v-if="exp.summary" class="pos-summary grey--text">{{ exp.summary }}</div>
            <ul v-if="exp.responsibilities && exp.responsibilities.length" class="pos-list">
              <li v-for="(r, idx) in exp.responsibilities" :key="idx">{{ r }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Position = {
  title?: string
  startDate?: string
  endDate?: string | null
  summary?: string
  responsibilities?: string[]
}

const props = defineProps<{
  items?: Array<{
    role?: string
    company?: string
    companySubtitle?: string
    location?: string
    startDate?: string
    endDate?: string | null
    summary?: string
    responsibilities?: string[]
    tags?: string[]
    positions?: Position[]
  }>
}>()

const items = computed(() => props.items ?? [])

function formatRange(start?: string, end?: string | null) {
  if (!start) return ''
  return end ? `${start} — ${end}` : `${start} — Present`
}

function hasPositions(exp: any) {
  return Array.isArray(exp.positions) && exp.positions.length > 0
}

function overallRange(positions?: Position[]) {
  if (!positions || positions.length === 0) return ''
  const starts = positions.map(p => p.startDate).filter(Boolean) as string[]
  const ends = positions.map(p => p.endDate).filter(Boolean) as string[]
  const earliest = starts.length ? starts.reduce((a, b) => (a < b ? a : b)) : ''
  const hasPresent = positions.some(p => !p.endDate)
  const latest = hasPresent ? 'Present' : (ends.length ? ends.reduce((a, b) => (a > b ? a : b)) : '')
  return earliest ? `${earliest} — ${latest}` : ''
}

function resolveLogo(logo?: string) {
  if (!logo) return '/logos/default.svg'
  try {
    if (logo.startsWith('/')) return logo
    return logo
  } catch (e) {
    return '/logos/default.svg'
  }
}
</script>

<style scoped>
.li-entry { padding: 0.75rem 0; border-bottom: 1px solid rgba(0,0,0,0.06); font-size: var(--font-body); }
.li-row { gap: 0; }
.li-left { display: flex; align-items: flex-start; }
.logo-wrap { margin-right: 12px; }
.company-meta { display: flex; flex-direction: column; }
.company-name { font-weight: 600; font-size: var(--font-subheading); }
.company-subtitle { font-size: 0.875rem; }
.company-range { margin-top: 4px; }
.li-right { padding-left: 0.5rem; }
.pos-head { margin-bottom: 4px; }
.pos-title { font-weight: 600; font-size: var(--font-subheading); }
.pos-summary { margin-bottom: 6px; }
.pos-list { margin: 0.25rem 0 0 1rem; padding: 0; }
ul { margin: 0; padding: 0; }
</style>
