<script setup lang="ts">
import { onMounted } from 'vue';
import { reqresInstance } from './services/http.client.ts';

onMounted(async () => {
  try {
    //  since the http client is configured as the global cofiguration (as a plugin),
    //  we can use it as part of every child of the app
    //  More info: https://github.com/axios/axios#axios-api
    const data = await reqresInstance.get(`users?page=2`);
    console.log("Server", data);
  } catch (error) {
    console.log("Error", error);
  }
});
</script>

<template>
  <div class="p-5">
    <h2>Vue 3 Axios HTTP Study</h2>
    <hr>
  </div>
</template>
