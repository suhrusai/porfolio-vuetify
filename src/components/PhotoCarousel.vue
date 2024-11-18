<template>
    <v-window
      v-model="currentIndex"
      show-arrows="hover"
      continuous
      cycle
    >
      <v-window-item
        v-for="(image, index) in images"
        :key="`card-${index}`"
      >
        <v-card
          class="d-flex align-center justify-center ma-2"
          elevation="2"
          height="400"
          max-width="600"
        >
          <v-img :src="image" height="100%" width="100%" contain></v-img>
        </v-card>
      </v-window-item>
    </v-window>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data: () => ({
      currentIndex: 0,
    }),
  };
  </script>
  
  <style scoped>

  .v-card {
    overflow: hidden;
  }
  </style>
  