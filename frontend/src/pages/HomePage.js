// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [showCartModal, setShowCartModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();


    const handleProceedToCheckout = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/checkout', { replace: true });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleAddToCart = (product) => {
        const newCart = { ...cart };
        if (newCart[product._id]) {
            newCart[product._id].quantity++;
        } else {
            newCart[product._id] = { product, quantity: 1 };
        }
        setCart(newCart);
    };

    const handleShowCartModal = () => {
        setShowCartModal(true);
    };

    const handleHideCartModal = () => {
        setShowCartModal(false);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter((product) => {
        if (selectedCategory === 'All') {
            return true;
        } else {
            return product.category === selectedCategory;
        }
    });

    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="company-name">ShopPe</div>
                <div className="cart" onClick={handleShowCartModal}>
                    <span>Cart ({Object.keys(cart).length})</span>
                </div>
            </nav>
            <div className="container">
                <div className="sidebar">
                    <ul>
                        <li onClick={() => handleCategoryChange('All')}>All</li>
                        <li onClick={() => handleCategoryChange('Televisions')}>Televisions</li>
                        <li onClick={() => handleCategoryChange('Refrigerators')}>Refrigerators</li>
                        <li onClick={() => handleCategoryChange('Washing Machines')}>Washing Machines</li>
                    </ul>
                </div>
                <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
            {showCartModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Cart</h2>
                        <ul>
                            {Object.keys(cart).map((productId) => (
                                <li key={productId}>
                                    {cart[productId].product.name} x {cart[productId].quantity} - ₹{cart[productId].product.price * cart[productId].quantity}
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleHideCartModal}>Close</button>
                        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;