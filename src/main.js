import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from '@/store'
import ElementPlus from 'element-plus';
import '@/assets/styles/element-variables.scss';

import '@/assets/styles/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
