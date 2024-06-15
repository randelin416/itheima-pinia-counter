import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


// 1. 導入createPinia
import { createPinia } from 'pinia'

// 2. 執行方法得到實例
const pinia = createPinia()

// 3. 把pinia實例加到app應用中
createApp(App).use(pinia).mount('#app')
