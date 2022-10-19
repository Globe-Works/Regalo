import React, { useEffect, useState } from "react";
import GiftComponent from "./GiftComponent";
const SelectionComponent = ({recipientId, gifts, fullName, notes, setDeleted, recentlyDeleted, setRecipientDeleted }) => {
    const [giftList, setGiftList] = useState([])
    const handleDelete = async () => {
        try {
            await fetch(`/api/recipient/${recipientId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(`Deleted ${recipientId}`)
            setRecipientDeleted({ recipientId })
        } catch (err) {
            console.log(`Error attempting to delete ${giftName}, Error: ${err}`)
        }
    }

    const addGift = () => {
        const tmpGiftArr = []
        gifts.forEach((gift,i) => {
            console.log('GiftId',gift.giftId, recipientId)
            tmpGiftArr.push(<GiftComponent
            key={`${gift.giftId}${recipientId}`}
            giftId={gift.giftId}
            giftName={gift.giftName}
            url={gift.url}
            notes={gift.notes}
            setDeleted={setDeleted}
            />)
        });
        setGiftList(tmpGiftArr)
    }
    useEffect(() => {
        try {
            addGift()
        } catch (err) {
            console.log(err)
        }

    },[recentlyDeleted])
    return (
        <div className="selection-container">
            <p className="person-name">{fullName}</p>
            <div className="name-component">
                <div className="item-component">{giftList}</div>
            </div>
            <button className="deleteBtn" onClick={handleDelete}>
                Delete Recipient
            </button>
        </div>

    )
};

export default SelectionComponent;