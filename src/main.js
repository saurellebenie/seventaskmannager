import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import style from '@/styles/style.css'
import '@/tailwind/index.css'

createApp(App).use(router).use(style).mount('#app')
