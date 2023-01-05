import styles from "..//styles/Sidebar.module.css"
import React from "react"
import Section from "./Sections"
import Footer from "./footer"
import Headland from "./headland"
import SearchbLOGCARDS from "./searchblogcards"
export default function Seearch(){



      const [search, setsearch] = React.useState("") 
      function handlechange(event){
        setsearch(prevformdata => {
            return{
                ...search,
                [event.target.name] : event.target.value
            }
        })
      }

    return(
        
                <div className={styles.WholeSearch2}>
<Headland setsearch = {setsearch}/>
    <Section/> 

 <SearchbLOGCARDS search = {search}/>
            <Footer/>
        </div>    



    )
}