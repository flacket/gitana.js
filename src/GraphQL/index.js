import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();

export const fetchQuery = (query, variables) => {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${authStore.getToken.value}`,
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
};
