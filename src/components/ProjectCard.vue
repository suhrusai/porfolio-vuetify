<template>
    <v-row>
      <v-col>
        <PhotoCarousel :images="project.images" />
      </v-col>
      <v-col>
        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>
        <div class="link-item" v-for="link in project.links">
            
            <a :href="link.src" target="_blank">
                <span class="icon-wrapper">
                    <v-img :src="link.icon" class="link-icon"></v-img>
                </span>
            <div class="link-text">{{link.displayText}}</div></a>
        </div>
        <br>
        <p><b>Tech Stack</b></p>
        <div v-for="(technologies,technologyCategory,index) in project.techstack">
            <p><b>{{ technologyCategory }}:</b> {{ technologies.join(", ") }}</p>
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import PhotoCarousel from './PhotoCarousel.vue';
  
  export default defineComponent({
    components: {
      PhotoCarousel,
    },
    props: {
      project: {
        type: Object as () => {
          name: string;
          description: string;
          images: string[];
          techstack : any;
          links: any;
        },
        required: true,
      },
    },
  });
  </script>
<style scoped>
.link-item {
  display: flex;
  align-items: center; /* Vertically center-align items */
  gap: 8px; /* Add space between the icon and text */
}

.link-item a {
  display: flex; /* Ensure the link content (icon and text) is in a row */
  align-items: center; /* Vertically center-align icon and text */
  margin: 5px;
  padding: 0;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

.link-icon {
  height: 24px;
  width: 24px;
  margin: 0;
  padding: 0;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.link-text{
    margin-left:10px;
}

</style>

