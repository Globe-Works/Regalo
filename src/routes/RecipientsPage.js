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
            <div id='recipients-page'>
                <h1>Recipients</h1>
                <section className="recipients-holder">
                    {
                    recipientsArr.map((recipient) => {
                    return <Recipient key={count++} fullName={recipient.fullName} birthday={recipient.birthday} notes={recipient.notes} recipientId={recipient._id} />
                    })
                    }
                </section>
                { showAddRecipient && <AddRecipientDisplay hideRecipient={hideRecipient}/> }
                <button onClick={displayAddRecipient}>add new recipient</button>
            </div>  
            </div>
  
        );
}

export default RecipientsPage;