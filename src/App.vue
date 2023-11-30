<template>
  <v-container fluid class="ma-2">
    <router-view />
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './store/auth';

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});
</script>
