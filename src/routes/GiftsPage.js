import React, { useState } from "react";
import { Gift } from '../components/Gift';
import { addGiftDisplay } from '../components/addGiftDisplay';

const GiftsPage = () => {

    const [showAddGift, setShowAddGift] = useState(false);
    const [giftsArr, setGiftsArr] = useState([{name: 'name1', link: 'link1', notes: 'notes1'}, {name: 'name2', link: 'link2', notes: 'notes2'}]);

    fetch('/api/gift')
    .then((response) => response.json())
    .then((data) => setGiftsArr(data))
    .catch((err) => {
        console.log('Error occurred in Gift Page fetch: ', err);
    })

    return (
        <div id='gift-page'>
            <h1>Gift Ideas</h1>
            <section className="gifts-holder">
                {
                giftsArr.map((gift) => {
                return <Gift name={gift.name} link={gift.link} notes={gift.notes} />
                })
                }
            </section>
            <button onClick={() => {setShowAddGift(true)}}>add new gift idea</button>
            {showAddGift === true && <addGiftDisplay />}
        </div>    
    );
}

export default GiftsPage;