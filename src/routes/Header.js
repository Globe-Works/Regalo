import React from "react";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
const Header = () => {
    return (
        
        <>
        <nav>
            <div>
                <h1>
                    Header
                </h1>
            </div>
        </nav>
        <p>
            <span>
            <Link to='/giftideas' >Gift Ideas</Link>
            </span>
        </p>
        <p>
            <span>
            <Link to='/pairup' >Pair Em Up!</Link>
            </span>
        </p>
        <p>
            <span>
            <Link to='/recipients' >Recipients</Link>
            </span>
        </p>
            <Outlet />
        </>

    )
};

export default Header;