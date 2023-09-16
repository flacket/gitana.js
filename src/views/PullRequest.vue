<template>
    <h1>Pull Request</h1>
    <BarChart />
    <Suspense>
      <p>{{ user }}</p>

      <!-- loading state -->
      <template #fallback>
            Loading...
      </template>
    </Suspense>

</template>

<script setup>
  import { ref } from 'vue';
  import BarChart from '@/components/BarChart'

  import { fetchTest } from '@/graphql/index';
  //import { GET_USER } from '@/graphql/queries';
  let user = ref('')
  fetchTest().then( res => user.value = res)
  //
  //let res = await fetchTest()
  //posts = res.allEpisode
</script>
