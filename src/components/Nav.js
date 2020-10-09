import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav-container">
            <h3 className="logo">Cory's Shop</h3>
            <ul>
                <Link className="nav-link" to="/">
                    <li>Home</li>
                </Link>
                <Link className="nav-link" to="/shop">
                    <li>Shop({props.checkOut.length})</li>
                </Link>
            </ul>
        </div>        
    );
};

export default Nav;