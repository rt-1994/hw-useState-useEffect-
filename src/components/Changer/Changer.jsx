import React, {useEffect, useState} from "react";
import styles from "./Changer.scss";


const Changer = ()=>{

    const [name, setName] = useState("Guy")
    const [number, setNumber] = useState(null)
    const [count, setCount] = useState(0)

    function countClick(){
        setCount(count+1)
    }

    function changeName(){
        setName(name+"y")
        countClick()
    }

    function changeLuckyNum(){
        setNumber(number=> Math.floor(Math.random() * 100))
    }

    return (
        <div className={styles.changer}>
            <p>Welcome Cool {name}</p>
            <p>Your lucky number is  {number}</p>
            <p>Name has changed {count} times</p>

            <button onClick={changeName}>Change name</button>
            <button onClick={changeLuckyNum}>Get your lucky number</button>
        </div>
    )
}
export default Changer;