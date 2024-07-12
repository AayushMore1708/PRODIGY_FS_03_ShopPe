import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Succeed.css';


const SuccessPage = () => {
    const navigate = useNavigate();


    const handleProceedToHomePage = () => {
        navigate('/HomePage', { replace: true });
    };
    return (
        <div className="success-page">
            <h1>Order Successful!</h1>
            <p>Thank you for your order. Your order has been successfully placed.</p>
             <button onClick={handleProceedToHomePage} className="btn btn-secondary">Continue Shopping</button>
        </div>
    );
};

export default SuccessPage;