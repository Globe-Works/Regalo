import React from "react";
import { useState } from "react";
import { Gift } from './Gift';

export default GiftPage = () => {
    const [giftsArr, setGiftsArr] = useState([])
    fetch('/api/gift',{
    })
    .then((response) => {
        response.json();
    })
    .then((data) => {
        setGiftsArr(data);
    })
    .catch((err) => {
        console.log('Error occurred in Gift Page fetch: ', err);
    })

    return (
        <div id='gift-page'>
            <h1>Gift Ideas</h1>
            <section>
            {
            giftsArr.map((gift) => {
            return <Gift name={gift.name} link={gift.link} notes={gift.notes} />
            })
        }
            </section>
        </div>    
    );
}