import styles from "..//styles/Sections.module.css"
import Link from "next/link"
export default function Section(){
    return(
        <div className={styles.wholesection}>
            <div className={styles.secondsection}>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/" className={styles.sectionlink}>
                        All
                    </Link>
                </div>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/Sport" className={styles.sectionlink}>
                        Sport
                    </Link>
                </div>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/Entertainment" className={styles.sectionlink}>
                        Entertainment
                    </Link>
                </div>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/Business" className={styles.sectionlink}>
                        Business
                    </Link>
                </div>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/Technology" className={styles.sectionlink}>
                        Technology
                    </Link>
                </div>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/Politics" className={styles.sectionlink}>
                        Politics
                    </Link>
                </div>
                <div className={styles.sectionlinkcontainer}>
                    <Link href="/SearchNews" className={styles.sectionlink}style={{color: "orangered"}}>
                        Search
                    </Link>
                </div>
            </div>
        </div>
    )
}