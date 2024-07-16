import { createApp } from 'vue';
import App from './App.vue';
import { reqresInstance, typicodeInstance } from './services/http.client';

createApp(App)
  .use({
    install(vueApp) {
      vueApp.config.globalProperties.$reqresService = reqresInstance;
      vueApp.config.globalProperties.$typicodeService = typicodeInstance;
    },
  })
  .mount('#app');
