import styles from "..//styles/Header.module.css"
import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faMailBulk, faTimes } from "@fortawesome/free-solid-svg-icons"
export default function Header(props){
    const[first, second] = React.useState(true)
    function Click(){
        second(thu => {
            return(
                thu = !first
            )
        })
    }

    return(
        <div className={styles.WholeHeadermenu}>
            <div className={styles.SecondWholeheader}>
                <div className={styles.Headermenuname}>
                  <div>
                    <div className={styles.Headermenuname}>UGHELLI<span className={styles.blog}>VIBES</span></div> 
                  </div>
                </div>
                <div className={first ?  styles.Headermenuminicontainer : styles.Headermenuminicontainer2}>
                    <div className={styles.linkcontainer}>
                        <Link href="/" className={styles.Headermenus}>
                            Blog
                        </Link>
                    </div>
                    <div className={styles.linkcontainer}>
                        <Link href= "./SearchNews" className={styles.Headermenus}>
                            Search
                        </Link>
                    </div>
                    <div className={styles.linkcontainer}>
                        <Link href="" className={styles.Headermenus}>
                            About Us
                        </Link>
                    </div>
                    <div className={styles.linkcontainer}>
                        <Link href="./Contact" className={styles.Headermenus}>
                            Advertise
                        </Link>
                    </div>
                    <div className={styles.linkcontainer}>
                        <Link href="./Contact" className={styles.Headermenus}>
                            <FontAwesomeIcon icon={faMailBulk}/>
                        </Link>
                    </div>
                </div>
                <FontAwesomeIcon icon={first ? faBars : faTimes} className={styles.menuicon} onClick={Click}/>
            </div>
        </div>
    )
}