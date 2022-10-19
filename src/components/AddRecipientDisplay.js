import React, { useState, useEffect } from 'react';

export const AddRecipientDisplay = (props) => {

    const { hideRecipient } = props;

    const [name, setName] = useState('');
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [recipientState, setRecipientState] = useState(null);
    const [zip, setZip] = useState(null);
    const [country, setCountry] = useState(null);

    const handleAddRecipient = () => {
        fetch('/api/recipient', {
            method: 'POST',
            body: JSON.stringify({
                full_name: name,
                user_id: 1,  // TEMPORARY DUMMY DATA
                address: address,
                city: city,
                zip: zip,
                state: recipientState,
                country: country
            }),
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            }
        })
        .then(res => res.json())
        .then(data => hideRecipient) // should close the window
        .catch((err) => {
            console.log('Error occurred while trying to add a recipient: ', err);
        })
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
            <div className='addItem'>
            <button onClick={hideRecipient}> X </button>
            <form>
                <label>name:
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>address (optional):
                    <input type="text" onChange={(e) => setAddress(e.target.value)}/>
                </label>
                <label>city (optional):
                    <input type="text" onChange={(e) => setCity(e.target.value)}/>
                </label>
                <label>state (optional):
                    <input type="text" onChange={(e) => setRecipientState(e.target.value)}/>
                </label>
                <label>ZIP code (optional):
                    <input type="text" onChange={(e) => setZip(e.target.value)}/>
                </label>
                <label>country (optional):
                    <input type="text" onChange={(e) => setCountry(e.target.value)}/>
                </label>
                <button onClick={handleAddRecipient}>add gift</button>
            </form>
        </div>
        </div>
    )
}