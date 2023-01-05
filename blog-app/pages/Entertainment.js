import React from "react";
import Section from "./Sections";
import Sidebar from "./sidebar";
import Footer from "./footer";
import BlogCard from "./Entertainmentdata";
import { ApolloClient, gql, InMemoryCache, ApolloProvider } from "@apollo/client";
import HeadandLand from "./headerandlanding";
const BlogApi = new ApolloClient({
    uri:"https://api-eu-west-2.hygraph.com/v2/cl9xdiogb0p9w01tbhwj5774y/master",
    cache: new InMemoryCache() 
});
const Advert = new ApolloClient({
  uri:"https://api-eu-west-2.hygraph.com/v2/clc8b5pet0vex01uh8glogtc9/master",
  cache: new InMemoryCache() 
});


 
  export default function Wholewebsite(){
      return(
        <div>
<HeadandLand/>


<Section/>
<Sidebar/>
<ApolloProvider client={BlogApi}>
  <BlogCard/>
</ApolloProvider>
<Footer/>
        </div>
      )
  }
  