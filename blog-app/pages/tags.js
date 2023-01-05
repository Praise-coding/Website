import Image from "next/image"
import Link from "next/link"
import styles from "..//styles/Sideforread.module.css"
import pic from "..//public/background-picture (1).jpg"
export default function Tags(){
    return(
        <div className={styles.wholesideforread}>
            <div className={styles.TabName}>Tags</div>
            <div className={styles.secondsidefortag}>
                <div className={styles.Eachtag}>
                    <Link className={styles.linktag} href="/">Home</Link>
                </div>
                <div className={styles.Eachtag}>
                    <Link className={styles.linktag} href="/">Adverise</Link>
                </div>
                <div className={styles.Eachtag}>
                    <Link className={styles.linktag} href="/">Entertainment</Link>
                </div>
            </div>
            <div className={styles.secondlinetab}>
                <div className={styles.Eachtag}>
                    <Link className={styles.linktag} href="/">Business</Link>
                </div>
                <div className={styles.Eachtag}>
                    <Link className={styles.linktag} href="/">Politics</Link>
                </div>
                <div className={styles.Eachtag}>
                    <Link className={styles.linktag} href="/">Technology</Link>
                </div>
            </div>
        </div>
    )
}