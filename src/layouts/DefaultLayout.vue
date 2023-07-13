<template>
  <v-layout>
    <v-app-bar color="info">
      
      <v-app-bar-title>
        <span class="font-weight-bold">GIT</span>
        <span class="font-weight-light">ANA</span>
        <span class="text-body-2 font-weight-light"> ANALÍTICAS DE GITHUB</span>
      </v-app-bar-title>

      <template v-slot:prepend v-if="isLoggedIn">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <template v-slot:append>
        <github-login v-if="isLoggedIn" />
        <!--<v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>-->
      </template>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" v-if="isLoggedIn">
      <v-list color="primary">
        <v-list-item prepend-icon="mdi-merge" title="Pull Request" to="pullrequest"></v-list-item>
        <v-list-item prepend-icon="mdi-source-repository" title="Repositorio" to="repositorio"></v-list-item>
        <v-list-item prepend-icon="mdi-download" title="RepoDescarga" to="repodescarga"></v-list-item>
        <v-list-item prepend-icon="mdi-help-circle" title="Acerca de" to="acerca"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-main>
    <router-view />
  </v-main>
  </v-layout>
</template>

<script setup>
  import GithubLogin from '@/components/GithubLogin.vue'
  import { onMounted, ref, watch } from 'vue'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  
  const isLoggedIn = ref(false);
  let auth;
  
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });

  const drawer = ref(false)
  const group = ref(null)

  watch(group, () => {
    drawer.value = false
  })
</script>
