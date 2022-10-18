import React, { useState, useEffect } from "react";
import { Gift } from '../components/Gift';
import { AddGiftDisplay } from '../components/AddGiftDisplay';

const GiftsPage = () => {

    const [showAddGift, setShowAddGift] = useState(false);
    const [giftsArr, setGiftsArr] = useState([]);

    let count = 0;

    useEffect(() => {
    fetch('/api/gift')
    .then((response) => response.json())
    .then((data) => setGiftsArr(data))
    .catch((err) => {
        console.log('Error occurred in Gift Page fetch: ', err);
    })
    })

    const displayAddGift = () => {
        setShowAddGift(true);
    }

    const hideAddGift = () => {
        setShowAddGift(false);
    }

    return (
        <div id='gift-page'>
            <h1>Gift Ideas</h1>
            <section className="gifts-holder">
                {
                giftsArr.map((gift) => {
                return <Gift key={count++} name={gift.title} link={gift.url} notes={gift.notes} />
                })
                }
            </section>
            <button onClick={displayAddGift}>add new gift</button>
            {showAddGift === true && <AddGiftDisplay hideGift={hideAddGift}/>}
        </div>    
    );
}

export default GiftsPage;