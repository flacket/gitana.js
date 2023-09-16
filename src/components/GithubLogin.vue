<template>
  <div>
    <v-btn
    @click=isLoggedIn?handleSignOut():handleSignIn()
    prepend-icon="mdi-github"
    color="primary"
    variant="flat"
    rounded>
      {{isLoggedIn?"Cerrar Sesión":"Iniciar Sesión"}}
    </v-btn>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useRouter } from "vue-router";
  import { useAuthStore } from "@/store/auth";

  const store = useAuthStore();
  const router = useRouter();
  //const provider = new GithubAuthProvider();
  const isLoggedIn = computed(function() {
    return store.isLoggedIn
  });

  const handleSignIn = async() => {
    try{
      await store.logIn();
      if (isLoggedIn.value) router.push('home')
    } catch (error) {
      alert(`Ocurrio un error: ${error.message}`);
    }
  };

  const handleSignOut = () => {
    store.logOut().then(() => {
      router.go('/');
    });
  };
</script>
