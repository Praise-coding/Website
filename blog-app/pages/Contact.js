import Link from "next/link"
import styles from "..//styles/Contact.module.css"
export default function Contact(){
    return(
        <div className={styles.containerforwholecontact}>
            <div className={styles.secondcontainerforlink}>
            <div className={styles.containerforlink}>
                <Link href={""} className={styles.linkforcontact}>
                    WhatsApp
                </Link>
                
            </div>
            <div className={styles.containerforlink}>
                <Link href={""} className={styles.linkforcontact}>
                    instagram
                </Link>
            </div>
            <div className={styles.containerforlink}>
                <Link href={""} className={styles.linkforcontact}>
                    Email              
                </Link>
            </div></div>
        </div>
    )
}