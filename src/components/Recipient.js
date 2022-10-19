import React from "react";

export const Recipient = (props) => {
    //People that the user will be gifting to
    const { fullName, birthday, notes, recipientId } = props;
    const deleteRecipient = async () =>{
        try {
            await fetch(`/api/recipient/${recipientId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
            });
            console.log(`Deleted ${fullName}`)
            } catch (err) {
                console.log(`Error attempting to delete ${fullName}, Error: ${err}`)
            }
    }
    return(
    <div class="recipient">
        <h2>{fullName}</h2>
        <p>Birthday: 'hi'</p>
        <p>Notes: {notes}</p>
        <button class="deleteItemButton" onClick={deleteRecipient}>Delete Recipient</button>
    </div>);
}
