import SideforReal from "./sideforread";
import Tags from "./tags";
import styles from "..//styles/Sideforread.module.css"
export default function Sidebarforreading(){
    return(
        <div className={styles.wholereadsidebar}>
            <SideforReal/>
            <Tags/>
        </div>
    )
}