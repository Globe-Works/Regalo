import React from "react";
import { Link } from 'react-router-dom';
import { addGiftDisplay } from '../components/addGiftDisplay'
const GiftIdeas = () => {

    const [showAddGift, setShowAddGift] = useState(false);
    const [showEditGift, setShowEditGift] = useState(false);
    return (
        <div id="body">
        <h1>GiftIdeasComponent</h1>
        <p>
            <span>
            {/* <Link to='/newgift' >New Gift</Link> */}
            <button onClick={() => {setShowAddGift(true)}}>add new gift idea</button>
            <div className="addGiftArea">{setShowAddGift === true && < addGiftDisplay/>}</div>
            </span>
        </p>
        </div>
    )
};

export default GiftIdeas;