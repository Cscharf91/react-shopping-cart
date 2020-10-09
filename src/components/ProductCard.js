import React from "react";


const ProductCard = (props) => {
    const handleChange = (e) => {
        props.updateQuantity(e.target.id, e.target.value);
    }

    return (
        <div className="product-card">
            <h2 className="product-name">{props.product.name}</h2>
            <img alt={props.product.name} src={props.product.img} />
            <p>${props.product.cost}</p>
            <div className="product-btn-grid">
                {/* <input id={props.product.id} defaultValue={props.product.quantity} onChange={handleChange} /> */}
                <p className="product-quant">{props.product.quantity}</p>
                <button onClick={() => {
                    props.updateProduct(props.product.name, "down")
                }}>-</button>
                        <button onClick={() => {
                            props.updateProduct(props.product.name, "up")
                        }}>+</button>
            </div>
        </div>
    );
};

export default ProductCard;