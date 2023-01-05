import { ApolloProvider, InMemoryCache, ApolloClient,  } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-west-2.hygraph.com/v2/cl9xdiogb0p9w01tbhwj5774y/master",
    cache: new InMemoryCache()
})
export default client