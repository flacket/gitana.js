import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

function getHeaders() {
    const token = localStorage.getItem("tokenId");
    const headers = { 
        "Authorization": token? `Bearer ${token}` : null, 
        "Content-Type": 'application/json' 
    };
    return headers;
}

// Create an http link:
const httpLink = new HttpLink({
    uri: `https://api.github.com/graphql`,
    fetch: (uri, options) => {
        options.headers = getHeaders();
        return fetch(uri, options);
    },
});

// Create the apollo client
//const apolloClient 

export default new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    defaultOptions: {
        query: {
            errorPolicy: "all",
        },
    },
});