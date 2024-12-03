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
        <div class="image-container">
          <v-progress-circular
            v-if="loading[index]"
            indeterminate
            color="primary"
            size="48"
          ></v-progress-circular>
          <img
            :src="image"
            height="100%"
            width="100%"
            v-show="!loading[index]"
            v-on:load="onImageLoad(index)"
          ></img>
        </div>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    const loading = ref([]);

    const initializeLoadingState = () => {
      loading.value = props.images.map(() => true);
    };

    const onImageLoad = (index) => {
      loading.value[index] = false; // Set loading to false when the image is loaded
    };

    watch(
      () => props.images,
      () => {
        initializeLoadingState();
      },
      { immediate: true }
    );

    return {
      currentIndex,
      loading,
      onImageLoad,
    };
  },
};
</script>

<style scoped>
.v-card {
  overflow: hidden;
}

.image-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

img {
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
}
</style>
