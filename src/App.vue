<template>
  <router-view />
</template>

<script setup>
import { useAuthStore } from './store/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const authStore = useAuthStore();
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if(user) {
    console.log('cambio de authState: true')
    authStore.isLogged = true;
    authStore.user.value = user;
  } else {
    console.log('cambio de authState: false')
    authStore.isLogged = false;
    authStore.user.value = {};
  }
});
</script>
