import React, {useState} from "react";
import Item from "./Item";
import styles from "./Click.scss";
import {logPlugin} from "@babel/preset-env/lib/debug";

const Click = () => {
    const [item, setItem] = useState([0, 1, 2])
    const [index, setIndex] = useState("nothing")

    function addItem() {
        setItem([...item, item.length])
    }

    function showItemIndex(i) {
        setIndex(index => index = i)
    }

    return (
        <div className={styles.click}>
            <h4>Clicked {index}</h4>

            <div className={styles.clickBody}>
                <ul>
                    {
                        item.map((item, index) => (
                                <Item key={item} number={index} showIndex={showItemIndex}/>
                            )
                        )
                    }
                </ul>
                <button onClick={addItem}>Add</button>
            </div>

        </div>
    )
}

export default Click;