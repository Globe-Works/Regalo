import React, { useEffect, useState } from "react";
import GiftComponent from "./GiftComponent";
const SelectionComponent = ({recipientId, gifts, fullName, notes, setDeleted, recentlyDeleted }) => {
    const [giftList, setGiftList] = useState([])
    const handleDelete = async () => {
        try {
            await fetch(`/api/match/${recipientId}`, {
                method: 'DELETE',
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                }
            });
                console.log(`Deleted ${recipientId}`)
            } catch (err) {
                console.log(`Error attempting to delete ${giftName}, Error: ${err}`)
            }
    }

    const addGift = () => {
        const tmpGiftArr = []
        gifts.forEach((gift,i) => {
            tmpGiftArr.push(<GiftComponent
            key={i}
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