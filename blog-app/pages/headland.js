import LandingPageForSearch from "./landingpageforsearch";
import styles from "..//styles/Header.module.css"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping , faTimes} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import pic from "./R.jpg"
export default function Headland(props){
    const[first, second] = useState(true)
    function Click(){
        second(thu => {
            return(
                thu = !first
            )
        })
    }

    return(
        <div style={{backgroundImage: `url(${pic.src})`}} className={styles.back}>
            <div className={styles.Black}>

            <div className={styles.WholeHeadermenu}>
            <div className={styles.SecondWholeheader} style={{backgroundColor: "transparent"}}>
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
                            <FontAwesomeIcon icon={faBagShopping}/>
                        </Link>
                    </div>
                </div>
                <FontAwesomeIcon icon={first ? faBars : faTimes} className={styles.menuicon} onClick={Click}/>
            </div>
        </div>

            

            <LandingPageForSearch setsearch={props.setsearch}/>
        </div></div>
    )
}