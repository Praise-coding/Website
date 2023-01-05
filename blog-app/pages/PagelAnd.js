import styles from "..//styles/page.module.css"
import { gql, useQuery } from "@apollo/client"
export default function Pgeland(props){
    let Query = gql`{
    
            advertsposts(first : 30000) {
              body
              url
              id
              title
            background{
                url
            }
          
            }
          }
      `

//       let {error, loading, data}= useQuery(Query)
// if(error){
//     return(
//         <div></div>
//     )
// }
// if(loading){
//     return(
//         <div></div>
//     )
// }
//     const Land = data.advertsposts.map(thu => { return(
//     <div className={styles.secondcontainerlandingpage}>
//         <div className={styles.imagecon}>
//              <Image src={thu.background.url} width="200" height="200" className={styles.background}/>
//         </div>
       
//     <div className={styles.Darkback}>
//         <div className={styles.secon}>
//             <div className={styles.title}>
//                 {thu.title}
//             </div>
//             <div className={styles.body}>
//                     {thu.body}
//             </div>

//             <div className={styles.buttoncontainermain}>
//                 <div className={styles.buttoncontainer2}>
//                     <div className={styles.buttoncontainer}>
//                         <button className={styles.button}>
//                             Read More
//                         </button>                                    
//                     </div>
//                     <div className={styles.buttoncontainer}>
//                         <button className={styles.button}>
//                             <a href={thu.url}>
//                                 Contact Us
//                             </a>
//                         </button>                                    
//                     </div>                                    
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>)})
let first = <div className={styles.secondcontainerlandingpage}>
<div className={styles.Darkback}>
    <div className={styles.secon}>
        <div className={styles.title}>
            The Official Website of  Ughelli Vibes
        </div>
        <div className={styles.body}>
            <div className={styles.body2}>
                This is the oficial websughelli vibes, a bloggingughelli vibes, a bloggingite of ughelli vibes, a blogging website mamde in 2020a blogging
            </div>
                
        </div>
        <div className={styles.buttoncontainermain}>
            <div className={styles.buttoncontainer2}>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button}>
                        Read More
                    </button>                                    
                </div>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button}>
                        Contact Us
                    </button>                                    
                </div>                                    
            </div>
        </div>
    </div>
</div>
</div>
    return(
        <div className={styles.Wholelandingpage}>
            <div className={styles.mainsec}>
                {first}

            </div>
        </div>
    )
}