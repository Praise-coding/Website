import Header from "./Header"
import Pgeland from "./PagelAnd"
import pic from "./full-background.jpeg"
import picc from "./background-picture (1).jpg"
import image from "./background-picture (1).jpg"
import styles from "..//styles/page.module.css"

export default function HeadandLand(props){
    return(
<div style={{background : `url(${image.src})`}} className={styles.Backk}>
    <Header/>
    <Pgeland Data={props.Daata}/>
</div>
    )
}