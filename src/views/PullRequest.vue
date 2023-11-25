<template>
  <h1>Pull Request</h1>
  <BarChart />
  <Suspense>
    <p>{{ user }}</p>

    <!-- loading state -->
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup>
import { ref } from "vue";
import BarChart from "@/components/BarChart";

import { fetchQuery } from "@/GraphQL";
import { GET_USER } from "@/GraphQL/queries";

const user = ref("");
fetchQuery(GET_USER, { login: "flacket" }).then((res) => (user.value = res));
</script>
