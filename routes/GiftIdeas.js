import React from "react";
import { Link } from 'react-router-dom';
const GiftIdeas = () => {
    return (
        <div id="body">
        <h1>GiftIdeasComponent</h1>
        <p>
            <span>
            <Link to='/newgift' >New Gift</Link>
            </span>
        </p>
        </div>
    )
};

export default GiftIdeas;