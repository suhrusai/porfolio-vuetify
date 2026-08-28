<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import Button from '@/components/ui/Button.vue'
import Icon from '@/components/Icon.vue'
import { socials, socialIconName, socialLabel } from '@/lib/portfolio'

function displayValue(hyperlink: string) {
  return hyperlink.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, '')
}

const primaryEmail =
  socials.find((s) => s.hyperlink.startsWith('mailto:'))?.hyperlink ??
  'mailto:saisuhrut@hotmail.com'
</script>

<template>
  <section id="contact" class="scroll-mt-20 py-20 sm:py-28">
    <div class="container">
      <div
        class="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-background p-8 sm:p-12"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="I'm open to software engineering roles and interesting collaborations. The fastest way to reach me is email."
        />

        <div class="flex flex-wrap gap-3">
          <Button as="a" :href="primaryEmail">
            <Icon name="mail" :size="16" />
            Send an email
          </Button>
          <Button
            v-for="s in socials.filter((x) => !x.hyperlink.startsWith('mailto:'))"
            :key="s.hyperlink"
            as="a"
            :href="s.hyperlink"
            target="_blank"
            rel="noopener"
            variant="outline"
          >
            <Icon :name="socialIconName(s.logo)" :size="16" />
            {{ socialLabel(s.logo) }}
          </Button>
        </div>

        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            v-for="s in socials"
            :key="s.hyperlink"
            :href="s.hyperlink"
            :target="s.hyperlink.startsWith('mailto:') ? undefined : '_blank'"
            rel="noopener"
            class="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary"
          >
            <span
              class="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"
            >
              <Icon :name="socialIconName(s.logo)" :size="16" />
            </span>
            <span class="min-w-0">
              <span class="block font-medium text-foreground">{{
                socialLabel(s.logo)
              }}</span>
              <span class="block truncate text-muted-foreground">{{
                displayValue(s.hyperlink)
              }}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
