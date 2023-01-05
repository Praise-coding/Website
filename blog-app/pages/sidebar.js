import styles from "..//styles/Sidebar.module.css"
import Search from "./search"
import Explore from "./Explore"
import Categories from "./categories"
import { ApolloClient } from "@apollo/client"
import { ApolloProvider, InMemoryCache } from "@apollo/client"
export default function Sidebar(props){
    const BlogApi = new ApolloClient({
        uri:"https://api-eu-west-2.hygraph.com/v2/cl9xdiogb0p9w01tbhwj5774y/master",
        cache: new InMemoryCache() 
    });
    return(
        <div className={styles.wholesidebar}>
            <Search Onclick={props.Onclick}/>
            <ApolloProvider client={BlogApi}>
             <Categories/>   
            </ApolloProvider>
            <Explore/>

        </div>
    )
}