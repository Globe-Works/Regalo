import React from "react";

export const Recipient = (props) => {
    //People that the user will be gifting to
    const {  } = props;
    return(
    <div class="recipient">
        <h2>{props.fullName}</h2>
        <p>Birthday: {props.birthday}</p>
        <p>Notes: {props.notes}</p>
        <button class="delete-recipient-button" onClick={deleteGift}>Delete Recipient</button>
    </div>);
}
