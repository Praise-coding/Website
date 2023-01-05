import React from "react"
import styles from "..//styles/landforread.module.css"


function Landforread(props){
    const usePathname = () => {

      } 
           const[fiirst, sec] = React.useState(true)
      
      
      function Click(){
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href) 
          }
        
        sec(thu=>{
                thu = !fiirst
            
        })
      }


    let first = <div className={styles.secondcontainerlandingpage} key={props.id}>
    <div className={styles.Darkback}>
        <div className={styles.secon}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.body}>
                <div className={styles.body2}>
                {props.body.slice(0, 130) + "..."}
                </div>
            </div>
            <div className={styles.buttoncontainermain}>
                <div className={styles.buttoncontainer}>
                     <button className={styles.button} onClick={Click}>Copy Link</button>               
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
                <div className={fiirst ? styles.copy : styles.copy2} onClick={Click}>
                    Copied!
                </div>
            </div>
        )
    }
    export default Landforread