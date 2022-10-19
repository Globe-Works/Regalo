import React, { useState, useEffect } from 'react';
import { DataItem } from './DataItem';
// import { recipientSearchBar } from './recipientSearchBar';

export const AddGiftDisplay = (props) => {

    const { hideGift } = props;

    const [giftName, setGiftName] = useState('');
    const [url, setUrl] = useState(null);
    const [recipients, setRecipients] = useState([]);
    const [existingRecipients, setExistingRecipients] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // array of objects

    useEffect(() => {
        fetch('/api/recipient')
        .then(res => res.json())
        .then(data => setExistingRecipients(data))
    }, [])

    const handleAddGift = () => {
        fetch('/api/gift', { // need to specify endpoint
          method: 'POST',
          body: JSON.stringify({
            giftName: giftName,
            url: url,
            recipients: recipients
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => console.log(data)) // later this will need to close the window
        .catch((err) => {
            console.log('Error occurred while trying to add a gift: ', err);
        })
    }
    const handleRecipientInputs = (event) => {
        handleFilter(event);
        setRecipients([...recipients, event.target.value]);
    }

    const handleFilter = (event) => {
        const entry = event.target.value;
        const recipients = existingRecipients;
        const newFilter = recipients.filter((value) => {
            return value.fullName.toLowerCase().includes(entry.toLowerCase());
        })
        setFilteredData(newFilter);
    }

    const replaceInput = (event) => {
        setRecipients([...recipients, event.target.value]);
    }

    return (
        <div className='addGift'>
            <button onClick={hideGift}> X </button>
            <form>
                <label>gift:
                    <input type="text" onChange={(e) => setGiftName(e.target.value)}/>
                </label>
                <label>link to gift (optional):
                    <input type="text" onChange={(e) => setUrl(e.target.value)}/>
                </label>
                <label>recipients (optional):
                    <input type="text" onChange={handleRecipientInputs}/>
                </label>
                {filteredData.length!== 0 && (
                    <div className="dataResult">
                    {filteredData.map((item) => {
                        return (
                            <DataItem key={item.fullName} onClick={replaceInput} text={item.fullName}/>
                        )
                    })}
                </div>)}
                {/* <recipientSearchBar/> */}
                <button onClick={handleAddGift}>add gift</button>
            </form>
        </div>
    )
}