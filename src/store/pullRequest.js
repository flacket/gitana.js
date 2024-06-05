import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePullRequestStore = defineStore('pullRequest', () => {
  const pullRequest = ref('');

  const getPR = computed(() => pullRequest.value)
  const isLoaded = computed(() => {
    pullRequest.value? true : false;
  })

  function setPR(data) {
    pullRequest.value = data;
  }

  return { pullRequest, getPR, isLoaded, setPR}
})