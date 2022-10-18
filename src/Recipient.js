import React from "react";

const Recipient = (props) => {

    return(<div>
        <img src={props.img}></img>
        <span>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Birthday: {props.birthday}</p>
            <p>Notes: {props.notes}</p>
        </span>
    </div>);
}

export default Recipient;