import styles from "..//styles/Blogcard.module.css"
import Image from "next/image"
import { gql } from "@apollo/client"
import Link from "next/link"
import { useQuery } from "@apollo/client"
export default function BlogCard(){
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

let Tag = "Business"
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


      const FilteredData = data.posts.filter(thu => thu.tag === Tag)
      const Data = FilteredData.map(data => {
        return(
<Link href={"/Read/" + data.title} className={styles.Wholeblogcardlink} key={data.id}><div className={styles.thirdblogcard}>
      <div className={styles.Imagecontainer}>
          <Image src={data.coverpic.url} className={styles.image} width={200} height={400} alt={data.title + "image"}/>
          <div className={styles.tag}>{data.tag}</div>
      </div>
      <div className={styles.writeup}>
          <div className={styles.title}>
              {data.title}
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
      

    return(
        <div id={styles.wholeBlogCardSection}>
            <div className={styles.secondBlogCard}>
             {Data}
            </div>
        </div>
    )
}