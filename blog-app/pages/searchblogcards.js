import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client"
import styles from "..//styles/Blogcard.module.css"
import Link from "next/link"
import Image from "next/image"
export default function SearchbLOGCARDS(props){
    let Query = gql`{
        posts(first: 1000000000000000) {
          id
          title
          body
          date
          tag
          coverpic {
            id
            url
          }
        }
      }
      `



  const {error, loading, data} = useQuery(Query)

      if(error){
        return(
          <div className={styles.Error}>
          <div>
              <div>No Page Found</div>
              <div>Check your Internet Connection</div>
              <div>Or Reload the Page</div>
          </div>
      </div>
  )
}
        
      
      if(loading){
         return(
             <div className={styles.divforload}>
             <div className={styles.load}>
     <hr className={styles.hu}/><hr className={styles.hu}/><hr className={styles.hu}/><hr className={styles.hu}/>
     </div></div>)}
      if(props.search === ""){
        return(
          <div className={styles.err}>Search Input Is Empty</div>
        )
      }

    
let s = data.posts.filter((item) => {
  return props.search.toLowerCase()  === "" ? item : item.title.toLowerCase().includes(props.search)
  })

  
  let dataCard =              s.map(data=> {
    return(
    <Link href={"/Read/" + data.title} className={styles.Wholeblogcardlink} key={data.id}><div className={styles.thirdblogcard}>
      <div className={styles.Imagecontainer}>
      <Image src={data.coverpic.url} className={styles.image} width={200} height={400} alt={data.title + "image"}/>
      <div className={styles.tag}>{data.tag}</div>
  </div>
  <div className={styles.writeup}>
      <div className={styles.title}>
          {data.title.slice(0, 39)}
      </div>
      <div className={styles.body}>
      {data.body.slice(0, 140 )+ "..."}
      </div>
      <div className={styles.readmoreanddate}>
        <div className={styles.readmore2}>
            Read More
        </div>
        <div className={styles.date}>
            {data.date}
        </div>
      </div>
    </div>
</div>
</Link>
    )
   })

            if(dataCard.length === 0){
        return(
          <div className={styles.err}>No Data Found</div>
        )
      }

    return(
        <div id={styles.wholeBlogCardSection} style={{marginRight : 0}}>
            <div className={styles.secondBlogCard}>
              {dataCard.reverse()}
            </div>
        </div>
    )
}