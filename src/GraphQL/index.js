import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

const selectedQuery = `query($login: String!) {
  user(login: $login) {
    repositories(first: 100) {
      nodes {
        id
        name
        createdAt
        isPrivate
      }
    }
  }
}`
const token = authStore.token;

export const fetchTest = () => {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query: selectedQuery,
      variables: { "login": "flacket" },
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      return result.data
    });
}


/*
function getHeaders() {
  const token = localStorage.getItem("tokenId");
  const headers = {
      "Authorization": token? `Bearer ${token}` : null,
      "Content-Type": 'application/json'
  };
  return headers;
}

// Create an http link:
const httpLink = new {
  uri: `https://api.github.com/graphql`,
  fetch: (uri, options) => {
      options.headers = getHeaders();
      return fetch(uri, options);
  },
};

// Create the apollo client
export default ({
  link: httpLink,
  defaultOptions: {
      query: {
          errorPolicy: "all",
      },
  },
});
*/