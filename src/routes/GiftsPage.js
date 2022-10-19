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
    },[])

    const displayAddGift = () => {
        setShowAddGift(true);
    }

    const hideAddGift = () => {
        setShowAddGift(false);
    }

    return (
        <div className="page">
            <div id='pageHeader'>
                <h1>Gift Ideas</h1>
                <button className="addItemButton" onClick={displayAddGift}>add new gift</button>
            </div>
                <section className="selections-list">
                    {
                    giftsArr.map((gift) => {
                    return <Gift key={count++} title={gift.title} url={gift.url} notes={gift.notes} giftID={gift.giftId} />
                    })
                    }
                </section>
                {showAddGift === true && <AddGiftDisplay hideGift={hideAddGift}/>}
        </div>
    );
}

export default GiftsPage;