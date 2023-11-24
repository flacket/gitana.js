<template>
  <v-layout>
    <v-app-bar color="info">

      <v-app-bar-title>
        <span class="font-weight-bold">GIT</span>
        <span class="font-weight-light">ANA</span>
        <span class="text-body-2 font-weight-light"> ANALÍTICAS DE GITHUB</span>
      </v-app-bar-title>

      <template v-slot:prepend v-if="authStore.isLoggedIn">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <template v-slot:append>
        <v-btn
          @click=btnClick
          prepend-icon="mdi-github"
          color="primary"
          variant="flat"
          rounded>
            {{ btnText }}
        </v-btn>
        <!--<v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>-->
      </template>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" v-if="authStore.isLoggedIn">
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
  import { useAuthStore } from '@/store/auth'
  import { ref, watch, computed } from 'vue'

  const authStore = useAuthStore();

  const btnClick = computed(function() {
    return authStore.isLoggedIn? authStore.logOut : authStore.logIn
  });
  const btnText = computed(function() {
    return authStore.isLoggedIn? 'Cerrar Sesión':'Iniciar Sesión'
  });

  const drawer = ref(false)
  const group = ref(null)
  watch(group, () => {
    drawer.value = false
  })
</script>
