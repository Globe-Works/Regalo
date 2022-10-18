import React from "react";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
const SelectionsScreen = () => {
    return (
        
        <>
            <h1>SelectionsScreen</h1>
            <Link to='/giftideas' >Gift Ideas</Link>
            <Outlet />
        </>

    )
};

export default SelectionsScreen;