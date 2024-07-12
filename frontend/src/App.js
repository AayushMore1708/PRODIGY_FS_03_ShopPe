
import './App.css';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import Succeed from './pages/Succeed';



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/Succeed" element={<Succeed />} />
        <Route path="/Homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
