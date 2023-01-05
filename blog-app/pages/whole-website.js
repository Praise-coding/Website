import React from "react"
import HeadandLand from "./headerandlanding";
import Section from "./Sections";
import Sidebar from "./sidebar";
import BlogContainer from "./BlogCard"
import Footer from "./footer";
import { ApolloClient, gql, InMemoryCache, ApolloProvider } from "@apollo/client";
const BlogApi = new ApolloClient({
    uri:"https://api-eu-west-2.hygraph.com/v2/cl9xdiogb0p9w01tbhwj5774y/master",
    cache: new InMemoryCache() 
});

const Advert = new ApolloClient({
  uri:"https://api-eu-west-2.hygraph.com/v2/clc8b5pet0vex01uh8glogtc9/master",
  cache: new InMemoryCache() 
});

  const Wholewebsite = () => {

      return(
        <div>
          
          
          <ApolloProvider client={Advert}>
          <HeadandLand/>            
          </ApolloProvider>

          <Section/>
          <Sidebar/>
          <ApolloProvider client={BlogApi}>
            <BlogContainer/>
          </ApolloProvider>
          <Footer/>
          
        </div>
      )
  }
  export default Wholewebsite