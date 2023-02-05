import React, {useEffect, useState} from "react";
import styles from "./Time.scss";


const Time = ()=>{

    const [time, setTime] = useState(new Date())


    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        }, 1000)
    },[])

    // console.log(time.time.toLocaleTimeString())


    return(
        <div className={styles.time}>
            <h3>The time is</h3>

            <div className={styles.timeBody}>
                <span>{time.getHours()>12?time.getHours()-12:time.getHours()}</span>
                <span>:</span>
                <span>{time.getMinutes()}</span>
                <span>:</span>
                <span>{time.getSeconds()}</span>
                <span>{time.getHours()>12?"PM":"AM"}</span>
            </div>



        </div>
    )
}

export default Time;