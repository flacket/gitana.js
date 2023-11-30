<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

          <v-img
            src="@/assets/logo.png"
            class="my-3"
            contain
            height="150"
          ></v-img>

      <v-row>
        <v-col mb-4>
          <h1 class="display-2 font-weight-bold">
            GIT<span class="font-weight-light">ANA</span>
          </h1>
          <p class="mb-5 title font-weight-light">Analíticas de Github</p>
          <p class="subheading font-weight-regular">
            Creado por Facundo Gallardo
            <br />si estás interesado o tienes dudas puedes
            <a
              href="mailto:facundoggallardo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >enviarme un correo</a
            >
          </p>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup></script>

<style>
v-img {
  display: flex;
  justify-content: center;
}
</style>