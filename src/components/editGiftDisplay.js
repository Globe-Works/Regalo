import React, { useState, useEffect } from 'react';

export const editGift = () => {

    const [newName, setNewName] = useState(null);
    const [newRecipients, setNewRecipients] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState(null);

    useEffect(() => {
        fetch('/api/recipient')
        .then(res => res.json)
        .then(data => setExistingRecipients(data))
    })

    const handleEditGift = (props) => { //will need old name from props
        fetch('api', { // need to specify endpoint
          method: 'PATCH',
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
            console.log('Error occurred while trying to edit gift: ', err);
        })
    }

    const handleRecipientInputs = (event) => {
        handleFilter(event);
        setRecipients([...recipients, event.target.value]);
    }

    const handleFilter = (event) => {
        const entry = event.target.value;
        const recipients = this.state.existingRecipients;
        const newFilter = recipients.filter((value) => {
            return value.fullName.toLowerCase().includes(entry.toLowerCase());
        })
        setFilteredData(newFilter);
    }

    const replaceInput = (event) => {
        setRecipients([...recipients, event.target.value]);
    }
    
    return (
        <div className='editGift'>
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
                    {filteredData.map(() => {
                        return (
                            <dataItem onClick={replaceInput} />
                        )
                    })}
                </div>)}
                {/* <recipientSearchBar/> */}
                <button onClick={handleEditGift}>add gift</button>
            </form>
        </div>
    )

}