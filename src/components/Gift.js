import React from 'react';

export const Gift = props => {
    const deleteGift = () => {

    }
    //Individual Gift Items
    return(
        <div className="gift">
            <h2>{props.name}</h2>
            <p>Link: <a href={props.link}>{props.link}</a></p>
            <p>Notes: {props.notes}</p>
            <button className="delete-gift-button" onClick={deleteGift()}>Delete</button>
        </div>
    )
}
