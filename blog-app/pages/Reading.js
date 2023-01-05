import Image from "next/image"
import styles from "..//styles/Reading.module.css"
import ReactMarkdown from 'react-markdown'
import pic from "..//public/background-picture (1).jpg"
export default function ReadingData(props){
    let data =     <div className={styles.wholereadingcontainer}>
        <div className={styles.seconscon}>
            <div className={styles.date}>
                {props.data.date}
            </div>
            <div className={styles.body}>
                <ReactMarkdown>
                                    {props.data.body}
                </ReactMarkdown>

            </div>
        </div>
    </div>
    return(<div>
{data}
</div>
    )
}