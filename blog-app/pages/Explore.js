import Link from "next/link"
import styles from "..//styles/explore.module.css"
export default function Explore(){
    return(
        <div className={styles.wholeExplorecontainer}>
            <div className={styles.secondinputcontainer}>
                <div className={styles.Tabname}>
                    Explore
                </div>
                <div className={styles.Explorewritup}>
                    <div className={styles.explorecontainer}>
                        <Link href="/" className={styles.linkinexplore}>Home</Link>
                    </div>
                    <div className={styles.explorecontainer}>
                        <Link href="Contact" className={styles.linkinexplore}>Adverise</Link>
                    </div>
                    <div className={styles.explorecontainer}>
                        <Link href="Contact" className={styles.linkinexplore}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}