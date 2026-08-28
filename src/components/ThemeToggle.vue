<script setup lang="ts">
import { useColorMode } from '@/composables/useColorMode'
import Button from '@/components/ui/Button.vue'
import Icon from '@/components/Icon.vue'

const { mode, toggle } = useColorMode()
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    aria-label="Toggle color theme"
    :title="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <Icon :name="mode === 'dark' ? 'sun' : 'moon'" :size="18" />
  </Button>
</template>
