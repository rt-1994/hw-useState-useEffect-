import React, {useState} from "react";
import styles from "./Position.scss";


const Position = ()=>{

    const [count, setCount] = useState(0)
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)

    function changeCount(){
        setCount(count+1)
    }

    function calcPosition(event){
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div className={styles.position} onMouseMove={calcPosition}>
            <p>You clicked {count} times</p>
            <button onClick={changeCount}>Click me</button>
            <div className={styles.positionBody}>
                <p>X position: <span>{x}</span></p>
                <p>Y position: <span>{y}</span></p>
            </div>

        </div>
    )
}

export default Position;
