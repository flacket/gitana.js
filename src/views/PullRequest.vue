<template>
    <h1>Pull Request</h1>
    <BarChart />

    <h2>Hello {{ user }}</h2>
    <h2>Your ID is: {{ user?.login ?? "Nose" }}</h2>
</template>

<script setup>
  import BarChart from '@/components/BarChart'

  import { useQuery } from "@vue/apollo-composable";
  import { USER } from '@/apollo/queries';

  const { result: user } = useQuery(USER)
</script>
