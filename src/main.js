import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from "@/store/store.js";

import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(ElementPlus).use(store)
app.mount('#app')
