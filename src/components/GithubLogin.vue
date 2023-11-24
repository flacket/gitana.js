<template>
  <div>
    <v-btn
    v-if="isLoggedIn"
    @click=authStore.logIn
    prepend-icon="mdi-github"
    color="primary"
    variant="flat"
    rounded>
      Iniciar Sesión
    </v-btn>
    <v-btn
    @click=authStore.logOut
    prepend-icon="mdi-github"
    color="primary"
    variant="flat"
    rounded>
      Cerrar Sesión
    </v-btn>
  </div>
</template>

<script setup>
  import { useAuthStore } from "@/store/auth";
  const authStore = useAuthStore();
  import { computed } from "vue";
  const isLoggedIn = computed(function() {
    return authStore.isLoggedIn
  });

  /*const handleSignIn = () => {
    authStore.logIn();
  };

  const handleSignOut = () => {
    authStore.logOut();
  };*/
</script>
