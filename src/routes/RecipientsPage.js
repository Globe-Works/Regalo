import React, { useState, useEffect } from "react";
import { Recipient } from "../components/Recipient";
import { AddRecipientDisplay } from '../components/AddRecipientDisplay';

const RecipientsPage = () => {

    const [recipientsArr, setRecipientsArr] = useState([]);
    const [showAddRecipient, setShowAddRecipient] = useState(false);

    let count = 0;
    useEffect(() => {
        fetch('/api/recipient', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            }
        })
        .then((response) => response.json())
        .then((data) => setRecipientsArr(data))
        .catch((err) => {
            console.log('Error occurred in Recipients Page fetch: ', err);
        })
        },[]);

    const displayAddRecipient = () => {
        setShowAddRecipient(true);
    }

    const hideRecipient = () => {
        setShowAddRecipient(false);
    }

        return (
            <div className="page">
                <div id='pageHeader'>
                    <h1>Recipients</h1>
                    <button className="addItemButton" onClick={displayAddRecipient}>add new recipient</button>
                </div>
                    <section className="selections-list">
                        {
                        recipientsArr.map((recipient) => {
                        return <Recipient key={count++} fullName={recipient.fullName} address={recipient.address} city={recipient.city} state={recipient.state} zip={recipient.zip} country={recipient.country} notes={recipient.notes} recipientId={recipient._id} />
                        })
                        }
                    </section>
                    { showAddRecipient && <AddRecipientDisplay hideRecipient={hideRecipient}/> }
            </div>  
        );
}

export default RecipientsPage;