import React, { useState, useEffect } from 'react';
import { DataItem } from './DataItem';

export const AddGiftDisplay = (props) => {

    const { hideGift } = props;

    const [giftName, setGiftName] = useState('');
    const [url, setUrl] = useState(null);
    const [recipientId, setRecipientId] = useState([]);
    const [recipientInput, setRecipientInput] = useState(null);
    const [existingRecipients, setExistingRecipients] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // array of objects
    const [alertMessage, setAlertMessage] = useState('')

    useEffect(() => {
        fetch('/api/recipient')
        .then(res => res.json())
        .then(data => setExistingRecipients(data))
    }, [])

    const handleAddGift = () => {
        if (recipientInput && !recipientId) {
            setAlertMessage('recipient not found')
        }
        fetch('/api/gift', {
          method: 'POST',
          body: JSON.stringify({
            title: giftName,
            url: url,
            recipientId: recipientId,
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => hideGift()) // should close the window
        .catch((err) => {
            console.log('Error occurred while trying to add a gift: ', err);
        })
    }

    const handleFilter = (event) => {
        const entry = event.target.value;
        setRecipientInput(entry);
        const recipients = existingRecipients;
        const newFilter = recipients.filter((value) => {
            return value.fullName.toLowerCase().includes(entry.toLowerCase());
        })
        setFilteredData(newFilter);
        existingRecipients.forEach((recipient) => {
            if (recipient.fullName === entry) setRecipientId(recipient._id);
        })
    }

    const replaceInput = (event) => {
        setRecipientId(event.target.id);
    }

    const modalOverlay = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 1000
    }

    return (
        <div style={modalOverlay}>
            <div className='addGift'>
            <button onClick={hideGift}> X </button>
            <form>
                <label>gift:
                    <input type="text" onChange={(e) => setGiftName(e.target.value)}/>
                </label>
                <label>link to gift (optional):
                    <input type="text" onChange={(e) => setUrl(e.target.value)}/>
                </label>
                <label>recipient (optional):
                    <input type="text" onChange={handleFilter}/>
                </label>
                {filteredData.length!== 0 && (
                    <div className="dataResult">
                    {filteredData.map((item) => {
                        return (
                            <DataItem key={item.fullName} id={item._id} onClick={replaceInput} text={item.fullName}/>
                        )
                    })}
                </div>)}
                <div className="alertMessage">{alertMessage}</div>
                <button onClick={handleAddGift}>add gift</button>
            </form>
        </div>
        </div>
    )
}