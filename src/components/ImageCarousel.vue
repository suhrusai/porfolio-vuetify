<script setup lang="ts">
import { ref } from 'vue'
import Icon from '@/components/Icon.vue'

const props = defineProps<{ images: string[]; alt?: string }>()

const index = ref(0)
const loaded = ref<Record<number, boolean>>({})

function prev() {
  index.value = (index.value - 1 + props.images.length) % props.images.length
}
function next() {
  index.value = (index.value + 1) % props.images.length
}
function markLoaded(i: number) {
  loaded.value = { ...loaded.value, [i]: true }
}
</script>

<template>
  <div
    class="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted"
  >
    <div
      class="flex h-full w-full transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${index * 100}%)` }"
    >
      <div
        v-for="(img, i) in images"
        :key="i"
        class="relative grid h-full w-full shrink-0 place-items-center"
      >
        <div
          v-if="!loaded[i]"
          class="absolute inset-0 animate-pulse bg-muted-foreground/10"
        />
        <img
          :src="img"
          :alt="alt ? `${alt} — screenshot ${i + 1}` : `screenshot ${i + 1}`"
          loading="lazy"
          class="h-full w-full object-contain"
          @load="markLoaded(i)"
        />
      </div>
    </div>

    <template v-if="images.length > 1">
      <button
        type="button"
        aria-label="Previous image"
        class="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
        @click="prev"
      >
        <Icon name="chevronLeft" :size="18" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        class="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 rotate-180 place-items-center rounded-full border border-border bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100 focus-visible:opacity-100"
        @click="next"
      >
        <Icon name="chevronLeft" :size="18" />
      </button>

      <div class="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
        <button
          v-for="(_, i) in images"
          :key="i"
          type="button"
          :aria-label="`Go to image ${i + 1}`"
          class="h-1.5 rounded-full transition-all"
          :class="i === index ? 'w-5 bg-primary' : 'w-1.5 bg-foreground/30'"
          @click="index = i"
        />
      </div>
    </template>
  </div>
</template>
