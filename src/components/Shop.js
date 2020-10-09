import React from 'react';
import CheckoutCard from './CheckoutCard';
import ProductCard from './ProductCard';

const Shop = (props) => {
    return (
        <div className="shop-content-container">
            <div className="products-container">
                {props.products.map((product) => 
                    <ProductCard key={product.id} product={product} updateQuantity={props.updateQuantity} updateProduct={props.updateProduct} />
                )}
            </div>
            <CheckoutCard total={props.total} />
        </div>     
    );
};

export default Shop;