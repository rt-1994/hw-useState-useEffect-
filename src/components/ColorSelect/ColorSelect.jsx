import React, {useEffect, useState} from "react";
import styles from "./ColorSelect.scss";

const colors = ['#e57373','#40ecd2', '#ece577']

const ColorSelect = ()=>{
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    useEffect(()=> {
        document.body.style.backgroundColor = selectedColor;

        return ()=> {
            document.body.style.backgroundColor = 'white';
        }
    },[selectedColor])

    return(
        <div className={styles.select}>
            <select onChange={event => setSelectedColor(event.target.value)}>
                {colors.map((item, idx)=> (
                    <option key={idx} value={item}>{item}</option>
                ))}
            </select>

            <p>{selectedColor}</p>
        </div>
    )
}

export default ColorSelect;