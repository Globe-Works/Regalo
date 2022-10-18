import React, { useState, useEffect } from 'react';
import { dataItem } from './dataItem';
// import { recipientSearchBar } from './recipientSearchBar';

export const addGift = () => {

    const [giftName, setGiftName] = useState('');
    const [url, setUrl] = useState(null);
    const [recipients, setRecipients] = useState([]);
    const [existingRecipients, setExistingRecipients] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('/api/recipient')
        .then(res => res.json)
        .then(data => setExistingRecipients(data))
    })

    const handleAddGift = () => {
        fetch('api', { // need to specify endpoint
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
                            <dataItem onClick={replaceInput} text={item}/>
                        )
                    })}
                </div>)}
                {/* <recipientSearchBar/> */}
                <button onClick={handleAddGift}>add gift</button>
            </form>
        </div>
    )
}



// (e) => setRecipients(recipients => [...recipients, e.target.value])



// export const Form = () => {
//     const [firstName, setFirstName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [age, setAge] = useState("")

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//         responseBody.firstName = firstName
//         responseBody.lastName = lastName
//         responseBody.age = age
//         console.log(JSON.stringify(responseBody))
// 	//Form submission happens here
//     }
//     const inputChangeHandler = (setFunction, event) => {
//         setFunction(event.target.value)
//     }
  
//     return(
//         <form onSubmit={onSubmitHandler}>
//             <div><label htmlFor="first_name">First Name</label></div>
//             <div><input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/></div>
//             <div><label htmlFor="last_name">Last Name</label></div>
//             <div><input id="last_name" onChange={(e)=>inputChangeHandler(setLastName, e)} type="text"/></div>
//             <div><label htmlFor="age">Age</label></div>
//             <div><input id="age" onChange={(e)=>inputChangeHandler(setAge, e)} type="number"/></div>
//             <input type="submit"/>
//          </form>
//          )
//          }