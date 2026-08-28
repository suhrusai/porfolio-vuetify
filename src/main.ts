import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/globals.css'
import { initColorMode } from './composables/useColorMode'

initColorMode()

createApp(App).mount('#app')
