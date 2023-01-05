import Header from "./Header";
import Sidebarforreading from "./Sidebarforreading";
import ReadingData from "./Reading";
import styles from "..//styles/landforread.module.css"
import Sidebar from "./sidebar";
import Landforread from "./landforread";
import Section from "./Sections";
import Footer from "./footer";
export default function Reading(props){

    return(
        <div>
            <div style={{backgroundImage: `url(${props.coverpic})`}} className={styles.bac}>
                <Header/>
                <Landforread title={props.title} motto={props.motto} body={props.body}/>
            </div>
            <Section/>
<Sidebar/>
<ReadingData data={props}/>
<Footer/>
        </div>
    )
}