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
        <span>
            
        </span>
            <Link to='/giftideas' >Gift Ideas</Link>
            <Link to='/newgift' >New Gift</Link>
            <Outlet />
        </>

    )
};

export default Header;