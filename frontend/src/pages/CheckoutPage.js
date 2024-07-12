// CheckoutPage.js
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
const CheckoutPage = () => {
    const [shippingInfo, setShippingInfo] = useState({});
    const [billingInfo, setBillingInfo] = useState({});
    const cart = JSON.parse(localStorage.getItem('cart'));
    const total = Object.keys(cart).reduce((acc, productId) => acc + cart[productId].product.price * cart[productId].quantity, 0);
    const cartItems = Object.values(cart);
    const navigate = useNavigate();


    const handleProceedToSucceed = () => {
        navigate('/Succeed', { replace: true });
    };
    useEffect(() => {
        // Initialize cart and total from local storage or API
        const storedCart = localStorage.getItem('cart');
        const storedTotal = localStorage.getItem('total');
        if (storedCart && storedTotal) {
            setCart(JSON.parse(storedCart));
            setTotal(JSON.parse(storedTotal));
        }
    }, []);

    const handleShippingInfoChange = (event) => {
        setShippingInfo({ ...shippingInfo, [event.target.name]: event.target.value });
    };

    const handleBillingInfoChange = (event) => {
        setBillingInfo({ ...billingInfo, [event.target.name]: event.target.value });
    };

    return (
        <div class="checkout-container">
            <h1 class="checkout-header" align="center">Checkout Page</h1>
            <div class="order-summary">
                <h2>Order Summary</h2>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.product.name} x {item.quantity}</span>
                            <span className="float-right">${item.product.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <p>
                    Total: <strong>₹{total}</strong>
                </p>
            </div>

            <hr />

            <div class="shipping-info">
                <h2>Shipping Information</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={shippingInfo.name} onChange={handleShippingInfoChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={shippingInfo.address} onChange={handleShippingInfoChange} />
                </label>
            </div>

            <hr />
            <div class="payment-method">
                <h2>Payment Method</h2>
                <select>
                    <option value="cashOnDelivery">Cash on Delivery</option>
                </select>
            </div>
          

            <button onClick={handleProceedToSucceed} align="center" type="submit" class="btn btn-primary btn-block">Complete Order</button>
        </div>
    );
};

export default CheckoutPage;