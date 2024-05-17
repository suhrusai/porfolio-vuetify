<template>
  <v-container :fluid="true">
    <Suspense>
      <Overview></Overview>
    </Suspense>

  </v-container>
</template>

<script lang="ts" setup>
import Overview from "./Overview.vue"
</script>
