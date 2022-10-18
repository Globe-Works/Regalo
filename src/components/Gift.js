import React from 'react';

export const Gift = props => {

    const { name, link, notes } = props;

    const deleteGift = () => {

    }
    //Individual Gift Items
    return(
        <div className="gift">
            <h2>{name}</h2>
            <p>Link: <a href={link}>{link}</a></p>
            <p>Notes: {notes}</p>
            <button className="delete-gift-button" onClick={deleteGift()}>Delete</button>
        </div>
    )
}
