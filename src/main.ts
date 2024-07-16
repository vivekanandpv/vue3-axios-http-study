import { createApp } from 'vue';
import App from './App.vue';
import { reqresInstance, typicodeInstance } from './services/http.client';

createApp(App)
  .provide('reqresService', reqresInstance)
  .provide('typicodeService', typicodeInstance)
  .mount('#app');
