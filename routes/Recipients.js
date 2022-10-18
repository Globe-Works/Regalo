import React from "react";
import { Link } from 'react-router-dom';
const Recipients = () => {
    return (
        <div id="body">
        <h1>Recipients Component</h1>
        <p>
            <span>
            <Link to='/newrecipient' >Add Recipient</Link>
            </span>
        </p>
        </div>
    )
};

export default Recipients;