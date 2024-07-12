// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, columns, onAddToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;