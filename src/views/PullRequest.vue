<template>
  <h1 class="text-h5 text-lg-h4 font-weight-black text-blue mb-4">
    Pull Request
  </h1>

  <SearchBar v-on:search-pr="searchPR" />
  <v-progress-linear
    v-if="loading"
    indeterminate
    color="primary"
  ></v-progress-linear>
  <v-divider />
  <div v-if="show">
    <h1 class="text-h6 text-grey">
      {{ repository.pullRequest.title }}
      <a
        class="text-h6 text-decoration-none"
        :href="repository.pullRequest.url"
        target="_blank"
        rel="noreferrer"
      >
        #{{ repository.pullRequest.number }}
      </a>
    </h1>
    <h4 class="mt-4">Métricas Grupales del Pull Request</h4>
    <v-card class="pa-4 rounded-b-xl" outlined>
      <v-row>
        <v-col sm="12" md="3">
          <h4>Participantes:</h4>
          <p>{{ repository.pullRequest.participants.totalCount }}</p>
          <h4>Tamaño PR (loc):</h4>
          <p>
            {{
              repository.pullRequest.additions +
              repository.pullRequest.deletions
            }}
          </p>
          <h4>Estado:</h4>

          <v-chip variant="flat">
            {{ repository.pullRequest.state }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import BarChart from "@/components/BarChart";
import SearchBar from "@/components/SearchBar.vue";

import { fetchQuery } from "@/GraphQL";
import { GET_REPO } from "@/GraphQL/queries";

const repository = ref("");
const loading = ref(false);
const show = ref(false);

async function searchPR(search) {
  loading.value = true;
  show.value = false;
  repository.value = await fetchQuery(GET_REPO, {
    owner: search.owner,
    name: search.name,
    number: parseInt(search.number),
  });
  repository.value = repository.value.repository;
  show.value = true;
  loading.value = false;
}
</script>
