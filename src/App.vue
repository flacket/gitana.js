<template>
  <v-container fluid class="ma-2">
    <router-view />
  </v-container>
</template>

<script setup>
/*import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase';

onAuthStateChanged(auth, (user) => {
  if(user) {
    console.log('cambio de authState: true')
    console.log(user)
  } else {
    console.log('cambio de authState: false')
  }
});*/
</script>
