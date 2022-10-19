import React from 'react';

export const Gift = props => {

    const { title, url, notes , giftId} = props;

    const deleteGift = async () => {
        try {
            await fetch(`/api/gift/${giftId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                }
            });
            console.log(`Deleted ${title}`)
            } catch (err) {
                console.log(`Error attempting to delete ${title}, Error: ${err}`)
            }
    }
    //Individual Gift Items
    return(
        <div className="gift">
            <h2>{title}</h2>
            <p>Link: <a href={url}>{url}</a></p>
            <p>Notes: {notes}</p>
            <button className="deleteItemButton" onClick={deleteGift}>Delete Gift</button>
        </div>
    )
}
