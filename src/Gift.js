import React from "react";

const Gift = props => {

    return(
        <div>
            <img src={props.img}></img>
            <span>
                <h2>{props.name}</h2>
                <p>Link: <a href={props.link}>{props.link}</a></p>
                <p>Notes: {props.notes}</p>
            </span>
        </div>
    )
}

export default Gift;
