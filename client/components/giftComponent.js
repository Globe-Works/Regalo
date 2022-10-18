import React, { useEffect } from "react";
const giftComponent = ({giftId, giftName, url, notes }) => {

    const deleteGift = async () => {
        try {
            await fetch(`/api/gift/${giftId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(`Deleted ${giftName}`)
        } catch (err) {
            console.log(`Error attempting to delete ${giftName}, Error: ${err}`)
        }
    }

    const handleDelete= async () => {
        try {
            await deleteGift()
        } catch (err) {
            console.log(`Error in Deleting Gift, Error: ${err}`)
        }
    }
    return (
        <div className="gift-container">
            <div className="gift-component">
                <img src={url}></img>
            </div>
            <p className="gift-name">{giftName}</p>
            <p className="gift-notes">{notes}</p>
            <button className="deleteGift" onClick={handleDelete}>
                Delete Gift
            </button>
        </div>

    )
};

export default giftComponent;