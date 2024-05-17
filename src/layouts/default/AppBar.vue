<template>
  <v-app-bar flat color="blue" dark :elevation="10" >
    <v-app-bar-title >
      <v-icon icon="mdi-circle-slice-6" />
      Essentials Preset
      <v-btn v-for="(section,index) in sections" :key="index" :id="section">
          {{section}}
      </v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
let sections : String[] = ["Overview","Projects","Contact"]

</script>
