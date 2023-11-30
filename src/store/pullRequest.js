import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const usePullRequestStore = defineStore('pullRequest', () => {
  const pullRequest = ref({});

  const getPR = computed(() => pullRequest.value)

  function setPR(data) {
    pullRequest.value = data;
  }

  return { pullRequest, getPR, setPR}
})