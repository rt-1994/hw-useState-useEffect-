import React, {useState, useEffect} from "react";
import styles from "./Counter.scss";

const value = Number(localStorage.getItem('count'))

const Counter = ()=>{

    const [count, setCount] = useState(value)

    useEffect(()=>{
        localStorage.setItem('count', count)
    }, [count])

    return(
        <div className={styles.counter}>
            <h3>{count}</h3>
            <div className={styles.buttons}>
                <button onClick={()=>count > 0 ? setCount(count - 1):setCount(count)}>-1</button>
                <button onClick={()=>setCount(count + 1)}>+1</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>

            <p>Count from Local Store</p>

        </div>
    )
}

export default Counter;