import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import '@/assets/css/style.css'

createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue, {
        unstyled: true
    })
    .mount('#app')
