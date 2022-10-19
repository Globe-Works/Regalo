import React from 'react';
const GiftComponent = ({ giftId, giftName, url, notes, setDeleted, recipientId }) => {
  const deleteGift = async () => {
    try {
      await fetch(`/api/match/`, {
          method: 'DELETE',
          credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          giftId,
          recipientId,
        }),
      });
      console.log(`Deleted ${giftName}`);
      setDeleted({ giftId });
    } catch (err) {
      console.log(`Error attempting to delete ${giftName}, Error: ${err}`);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteGift();
    } catch (err) {
      console.log(`Error in Deleting Gift, Error: ${err}`);
    }
  };
  return (
    <div className="gift-container">
      <div className="gift-component">
        <img src={url}></img>
      </div>
      <p className="gift-name">{giftName}</p>
      <p className="gift-notes">{notes}</p>
      <button className="deleteItemButton" onClick={handleDelete}>
        Delete Gift
      </button>
    </div>
  );
};

export default GiftComponent;
