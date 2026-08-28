<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import Card from '@/components/ui/Card.vue'
import Badge from '@/components/ui/Badge.vue'
import Icon from '@/components/Icon.vue'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics?: string[]
  updated_at: string
}

const repos = ref<Repo[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch(
      'https://api.github.com/users/suhrusai/repos?type=public&sort=updated&direction=desc&per_page=100',
      { headers: { Accept: 'application/vnd.github+json' } },
    )
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)
    const data: Repo[] = await res.json()
    repos.value = data
      .filter((r) => r.name !== 'suhrusai')
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          +new Date(b.updated_at) - +new Date(a.updated_at),
      )
      .slice(0, 6)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load repositories'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section id="repositories" class="scroll-mt-20 py-20 sm:py-28">
    <div class="container">
      <SectionHeading
        eyebrow="GitHub"
        title="Public repositories"
        description="A live view of my public repos on GitHub — course work, side projects and experiments."
      />

      <div v-if="loading" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="n in 6"
          :key="n"
          class="h-40 animate-pulse rounded-lg border border-border bg-background"
        />
      </div>

      <p
        v-else-if="error"
        class="rounded-lg border border-border bg-background p-6 text-sm text-muted-foreground"
      >
        Couldn't load repositories right now ({{ error }}). Visit
        <a
          href="https://github.com/suhrusai"
          target="_blank"
          rel="noopener"
          class="font-medium text-primary hover:underline"
          >github.com/suhrusai</a
        >.
      </p>

      <div v-else class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="repo in repos"
          :key="repo.id"
          :href="repo.html_url"
          target="_blank"
          rel="noopener"
          class="group block"
        >
          <Card class="flex h-full flex-col p-5 group-hover:border-primary group-hover:shadow-md">
            <div class="flex items-start justify-between gap-3">
              <h3 class="font-semibold leading-snug text-foreground">
                {{ repo.name }}
              </h3>
              <Icon
                name="arrowUpRight"
                :size="16"
                class="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </div>
            <p class="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
              {{ repo.description || 'No description provided.' }}
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span v-if="repo.language" class="inline-flex items-center gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-primary" />
                {{ repo.language }}
              </span>
              <span class="inline-flex items-center gap-1">
                <Icon name="star" :size="13" /> {{ repo.stargazers_count }}
              </span>
              <span v-if="repo.forks_count" class="inline-flex items-center gap-1">
                <Icon name="code" :size="13" /> {{ repo.forks_count }}
              </span>
            </div>
          </Card>
        </a>
      </div>
    </div>
  </section>
</template>
