<template>
  <v-container :fluid="true">
    <Suspense>
      <Overview />
    </Suspense>
  </v-container>
</template>

<script lang="ts" setup>
import Overview from "./Overview.vue"
import ExperienceList from "./ExperienceList.vue"
</script>
