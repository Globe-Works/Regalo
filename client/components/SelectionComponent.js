import React from "react";
const SelectionComponent = ({giftId, fullName, giftName, url, date, notes }) => {
    const handleDelete = async () => {
        try {
            await fetch(`/api/${giftId}`, {
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
    return (
        <div className="selection-container">
            <div className="selection-component">
                <div className="item-component">
                    <div className="item-picture">
                        <img src={url}></img>
                    </div>
                    <p className="item-name">{giftName}</p>
                </div>
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