import Seearch from "./searchforblog";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
const BlogApi = new ApolloClient({
    uri:"https://api-eu-west-2.hygraph.com/v2/cl9xdiogb0p9w01tbhwj5774y/master",
    cache: new InMemoryCache() 
});
export default function Search(){
    return(
        <div>
            <ApolloProvider client={BlogApi}>
                <Seearch/>
            </ApolloProvider>
        </div>
    )
}