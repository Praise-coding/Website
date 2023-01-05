import styles from "..//styles/searchlandingpage.module.css"
export default function LandingPageForSearch(props){
    return(
        <div className={styles.Wholelandingpage}>
            <div className={styles.mainsec}>
                <div className={styles.secondcontainerlandingpage}>
                    <div className={styles.Darkback}>
                        <div className={styles.secon}>
                            <h1 className={styles.title}>
                                    Start using our reliable search engine to search for blogs and Articles
                                {/* The best free stock photos, royalty free images & videos shared by creators. */}
                            </h1>
                            <div className={styles.buttoncontainermain}>
                                <input placeholder="Search Here" className={styles.input}  onChange={(e) => props.setsearch(e.target.value)}/>                        
                            </div>
                            <p className={styles.Section}>Explore : Politics, Technology, Sport, Business</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}