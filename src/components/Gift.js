import React from 'react';

export const Gift = props => {

    const { title, url, notes , giftId} = props;

    const deleteGift = () => {
        try {
            await fetch(`/api/gift/${giftId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(`Deleted ${giftName}`)
            setDeleted({ giftId })
        } catch (err) {
            console.log(`Error attempting to delete ${giftName}, Error: ${err}`)
        }
    }
    //Individual Gift Items
    return(
        <div className="gift">
            <h2>{title}</h2>
            <p>Link: <a href={url}>{url}</a></p>
            <p>Notes: {notes}</p>
            <button className="delete-gift-button" onClick={deleteGift}>Delete Gift</button>
        </div>
    )
}
