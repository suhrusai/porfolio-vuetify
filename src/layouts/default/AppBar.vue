<template>
  <v-app-bar flat color="blue" dark :elevation="10" >
    <v-app-bar-title >
      Sai Suhrut
      <v-btn v-for="(section,index) in sections" :key="index" @click="scrollToSection(section)">
          {{section}}
      </v-btn>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
let sections : string[] = ["overview","repos","contact"]
const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const appBarHeight = document.querySelector('.v-app-bar')?.clientHeight || 0; // Get app bar height
    window.scrollTo({
      top: sectionElement.offsetTop - appBarHeight,
      behavior: 'smooth',
    });
  }
};
</script>
