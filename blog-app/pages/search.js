
import Link from "next/link"

import styles from "..//styles/Sidebar.module.css"
export default function Search(props){
    return(
    <Link href="SearchNews" className={styles.Searchbutton}>
        <div className={styles.wholesearchinputcontainer}>
            <div className={styles.secondinputcontainer}>
                <div className={styles.inputsection}>
                    <div className={styles.miniinputsection}>
                        <div placeholder="Type Here" className={styles.SearchInput}>Search for Blogs</div>
                        <div className={styles.logcontainer}>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>        
    )
}