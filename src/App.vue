<script setup lang="ts">
import { ref } from 'vue';
import { reqresInstance } from './services/http.client.ts';

const postResult = ref('');
const putResult = ref('');
const patchResult = ref('');
const deleteResult = ref('');


const makeCall = async (httpMethod: string) => {
  switch (httpMethod) {
    case "POST":
      try {
        const data = await reqresInstance.post(`users`, {
          firstName: "Vue3 Test",
        });
        console.log("Server: POST", data);
        postResult.value = data.data;
      } catch (error) {
        console.log("Error: POST", error);
      }
      break;
    case "PUT":
      try {
        const data = await reqresInstance.put(`users/3456`, {
          firstName: "Vue3 Test",
        });
        console.log("Server: PUT", data);
        putResult.value = data.data;
      } catch (error) {
        console.log("Error: PUT", error);
      }
      break;

    case "PATCH":
      try {
        const data = await reqresInstance.patch(`users/3456`, {
          firstName: "Vue3 Test",
        });
        console.log("Server: PATCH", data);
        patchResult.value = data.data;
      } catch (error) {
        console.log("Error: PATCH", error);
      }
      break;

    case "DELETE":
      try {
        const data = await reqresInstance.delete(`users/57845`);
        console.log("Server: DELETE", data);

        deleteResult.value =
          data.status >= 200 && data.status < 300
            ? "DELETE successful"
            : "DELETE failed";
      } catch (error) {
        console.log("Error: DELETE", error);
      }
      break;

    default:
      break;
  }
}
</script>

<template>
  <div class="container p-5">
    <h3>Learning HTTP communication in Vue 3</h3>
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('POST')">POST</button>
    {{ postResult }}
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('PUT')">PUT</button>
    {{ putResult }}
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('PATCH')">
      PATCH
    </button>
    {{ patchResult }}
    <hr />
    <button class="btn btn-primary mr-2" @click="makeCall('DELETE')">
      DELETE
    </button>
    {{ deleteResult }}
    <hr />
  </div>
</template>
