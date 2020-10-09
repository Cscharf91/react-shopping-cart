import React from 'react';

const CheckoutCard = (props) => {
    return (
        <div className="checkout-container">
            <h3>Checkout:</h3>
            <p className="total-amt">Total: ${props.total}</p>
            <button>Fake Checkout</button>
        </div>     
    );
};

export default CheckoutCard;