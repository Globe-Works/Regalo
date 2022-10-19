import React, { useEffect, useState } from 'react';
import GiftComponent from './GiftComponent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectionComponent = ({
  recipientId,
  gifts,
  fullName,
  notes,
  setDeleted,
  recentlyDeleted,
  setRecipientDeleted,
  giftsData,
  setGiftAdded,
  giftAdded,
}) => {
  const [giftList, setGiftList] = useState([]);

  const handleDelete = async () => {
    try {
      await fetch(`/api/recipient/${recipientId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(`Deleted ${recipientId}`);
      setRecipientDeleted({ recipientId });
    } catch (err) {
      console.log(`Error attempting to delete ${giftName}, Error: ${err}`);
    }
  };

  const handlePair = async (e) => {
      console.log(e.target.value);
      await fetch(`/api/match/`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              giftId: e.target.value._id,
              recipientId: recipientId
          })
      });
      console.log('handlePair',e.target.value)
      setGiftAdded({gift: e.target.value})
  };
  const loadGift = () => {
    const tmpGiftArr = [];
    gifts.forEach((gift, i) => {
      tmpGiftArr.push(
        <GiftComponent
          key={`${gift.giftId}${recipientId}`}
          giftId={gift.giftId}
          giftName={gift.giftName}
          url={gift.url}
          notes={gift.notes}
          setDeleted={setDeleted}
        />,
      );
    });
    setGiftList(tmpGiftArr);
  };
  useEffect(() => {
    try {
      loadGift();
    } catch (err) {
      console.log(err);
    }
  }, [recentlyDeleted,giftAdded]);

    const MenuItems = [];
    giftsData.forEach((gift) => {
        MenuItems.push(<MenuItem value={gift}>{`${gift.title}` }</MenuItem>)
    });
    
  return (
    <div className="selection-container">
      <p className="person-name">{fullName}</p>
      <div className="name-component">
        <div className="item-component">{giftList}</div>
      </div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pair New Gift</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={giftsData}
            label="PairGift"
            onChange={handlePair}
          >
            {MenuItems}
          </Select>
        </FormControl>
      </Box>
      <button onClick={handleDelete}>
        Delete Recipient
      </button>
    </div>
  );
};

export default SelectionComponent;
