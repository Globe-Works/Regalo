import React, { useEffect } from "react";
import giftComponent from "./giftComponent";
const SelectionComponent = ({recipientId, gifts, fullName, notes }) => {
    const [giftList, setGiftList] = useState([])
    const handleDelete = async () => {
        try {
            await fetch(`/api/match/${giftId}`, {
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

    const addGift = () => {
        const tmpGiftArr = []
        gifts.forEach((gift,i) => {
            tmpGiftArr.push(<giftComponent
            giftId={gift.giftId}
            giftName={gift.giftName}
            url={gift.url}
            notes={gift.notes}
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

    },[giftList])
    return (
        <div className="selection-container">
            <div className="selection-component">
                <div className="item-component">{giftsList}</div>
                <div className="name-component">
                    <p className="person-name">{fullName}</p>
                    <p className="date">{date}</p>
                </div>
            </div>
            <button className="deleteBtn" onClick={handleDelete}>
                Delete
            </button>
        </div>

    )
};

export default SelectionComponent;