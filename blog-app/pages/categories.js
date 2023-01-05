import Link from "next/link"
import styles from "..//styles/categories.module.css"
import { gql, useQuery } from "@apollo/client"
import Image from "next/image"
export default function Categories(){
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
          minutes
        }
      }
      `

      let {error, loading, data} = useQuery(Query)
            if(error){
        return(
            <div>error</div>
        )
      }
      if(loading){
        return(
            <div>loading</div>
        )
      }
      let datas = data.posts.map(data => {
        return(
            <Link href={"/Read/" + data.title}className={styles.link} key={data.id}>
            <div className={styles.category} >
                <div className={styles.imagecontainer}>
                    <Image src={data.coverpic.url} width={4000} height={4000} className={styles.image} alt={data.title + "image"}/>
                </div>
                <div className={styles.Writeup}>
                    <div className={styles.date}>
                        {data.date}
                    </div>
                    <div className={styles.title}>
                        {data.title.slice(0, 16) + "..."}
                    </div>
                    <div className={styles.min}>
                        {data.minutes}
                    </div>
                </div>
            </div>
        </Link>
        )
      })
      
// function shuffleArray(array) {
 
//     return array.sort( ()=>Math.random()-0.5 );
  
//  }

    
    let random = datas.sort( ()=>Math.random()-3 );
        let slice = datas.reverse();

    return(
        <div className={styles.wholecategoriessection}>
            <div className={styles.secondcategoriessection}>  
                <div className={styles.catergoriesname}>
                    Recent Article
                </div>
                {slice.reverse().slice(0, 3)}
            </div>
        </div>
    )
}