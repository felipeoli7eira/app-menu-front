import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap@5.3.0
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import '@/assets/app.scss'

createApp(App)
.use(store)
.use(router)
.mount('#app')
