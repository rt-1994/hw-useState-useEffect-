import React from "react";

const Item = (props) => {
    return (
        <li onClick={() => props.showIndex(props.number)}>
            Item {props.number}
        </li>
    )
}

export default Item;