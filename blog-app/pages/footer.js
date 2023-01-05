import styles from "..//styles/footer.module.css"
import Image from "next/image"
import Link from "next/link"
import pic3 from "..//public/icons8-instagram-48.png"
import pic4 from "..//public/icons8-mail-48.png"
import pic5 from "..//public/icons8-linktree-48.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import pic2 from "..//public/icons8-twitter-circled-48.png"
export default function Footer(){
    return(
        <div>
        <div className={styles.footerdistributed}>
    

    
          <div className={styles.footerleft}>
    
            <p className={styles.footerlinks}>
              <Link className={styles.link1} href="/">Home</Link>
    
              <Link href="/">Blog</Link>
              <Link href="/SearchNews">Search</Link>
              <Link href="/Contact">Contact</Link>
            </p>
            <p className={styles.company}>Ughelli Vibes &copy; 2023</p>
          </div>
          <div className={styles.footerright}>
    
    <a href="#"><Image src={pic2} className={styles.sharelogo} alt={"social meia logo"}/></a>
    <a href="https://www.instagram.com/ughellivibes/"><Image src={pic3} className={styles.sharelogo}alt={"social meia logo"}/></a>
    <a href="#"><Image src={pic4} className={styles.sharelogo}alt={"social meia logo"}/></a>
    <a href="#"><Image src={pic5} className={styles.sharelogo}alt={"social meia logo"}/></a>
  </div>
        </div>
        </div>
    )
}