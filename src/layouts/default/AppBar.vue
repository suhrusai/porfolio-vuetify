<template>
  <v-app-bar flat color="blue" dark :elevation="10" >
    <v-app-bar-title >
      Sai Suhrut
      <v-btn v-for="(section,index) in sections" :key="index" :id="section">
          {{section}}
      </v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
let sections : String[] = ["Overview","Repos","Contact"]

</script>
