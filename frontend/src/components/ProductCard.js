// components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;