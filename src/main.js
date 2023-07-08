import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import router from './router/router'        
import { createPinia } from "pinia"
import piniaPersist from 'pinia-plugin-persist'
import '@arco-design/web-vue/dist/arco.css'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
