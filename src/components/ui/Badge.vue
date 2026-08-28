<script lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary/10 text-primary',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
</script>

<script setup lang="ts">
import { cn } from '@/lib/utils'

defineProps<{ variant?: BadgeVariants['variant']; class?: string }>()
</script>

<template>
  <span :class="cn(badgeVariants({ variant }), $props.class)">
    <slot />
  </span>
</template>
