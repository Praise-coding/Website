import {GraphQLClient, gql} from "graphql-request"
import Reading from "../Readingg";

    const SportApi = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cl9xdiogb0p9w01tbhwj5774y/master");

    const GETPOST = gql`  
    query($title: String){
    posts(where: {title : $title}) {
        id
        title
        body
        date
        coverpic {
          id
          url
        }
        tag
    
      }
    }
    `       
const Titlelist = gql`
{
  posts{
    title
  }
}`

export async function getStaticPaths(){

  const {posts} = await SportApi.request(Titlelist)
  
  return{
    paths: posts.map((post) => ({params: {title :post.title}})),
    fallback: false,
  }
}

    export async function getStaticProps({params}){ 
      try{
      const title = params.title
      const data = await SportApi.request(GETPOST, {title})

      const dataa = data
      return{
        props:{
          dataa,
        },
        revalidate: 10, 
      }        
      }
      catch{
        return{
          notFound: true
        }
      }

    }
    

export default function Readoo({dataa}){

return(
  <main>
    {dataa.posts.map(thu => {
      return(
        <Reading title ={thu.title} date={thu.date} coverpic={thu.coverpic.url} body={thu.body} tag={thu.tag} key={thu.id}/>
      )
    })}
    </main>
  )
}