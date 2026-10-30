import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from "@/store/store.js";
import I18n from '@/I18n'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'

const app = createApp(App)

app.use(store).use(I18n).use(router).use(ElementPlus)
app.mount('#app')
