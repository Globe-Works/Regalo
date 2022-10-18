import React from "react";
import { Link } from 'react-router-dom';
const GiftIdeas = () => {

    const [showAddGift, setShowAddGift] = useState(false);

    return (
        <div id="body">
        <h1>GiftIdeasComponent</h1>
        <p>
            <span>
            {/* <Link to='/newgift' >New Gift</Link> */}
            <button onClick={setShowAddGift(true)}>new gift</button>
            
            </span>
        </p>
        </div>
    )
};

export default GiftIdeas;