// seeds/products.js
const Product = require('../models/Products.js');
const mongoose = require('mongoose');
const products = [
    {
        name: 'Apple iPhone 13',
        category: 'Electronics',
        type: 'Smartphone',
        description: 'Latest iPhone model with advanced camera and processor',
        price: 999.99,
        image: 'https://media.croma.com/image/upload/v1664009491/Croma%20Assets/Communication/Mobiles/Images/243460_0_n90peu.png'
    },
    {
        name: 'Samsung TV 4K',
        category: 'Electronics',
        type: 'TV',
        description: 'High-definition TV with 4K resolution and HDR',
        price: 1299.99,
        image: 'https://m.media-amazon.com/images/I/71G3w6wIhZL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: 'Nike Air Jordan',
        category: 'Fashion',
        type: 'Shoes',
        description: 'Limited edition basketball shoes with advanced technology',
        price: 199.99,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4cf472-051a-4699-964b-443b3364b2bb/air-jordan-1-mid-shoes-86f1ZW.png'
    },
    {
        name: 'Dell Laptop',
        category: 'Electronics',
        type: 'Laptop',
        description: 'High-performance laptop with Intel Core i7 processor',
        price: 799.99,
        image: 'https://images-cdn.ubuy.co.in/651d646f5246af3e611f9458-dell-inspiron-3000-laptop-15-6-non-touch.jpg'
    },
    {
        name: 'Sony PlayStation 5',
        category: 'Electronics',
        type: 'Gaming Console',
        description: 'Next-generation gaming console with advanced graphics',
        price: 499.99,
        image: 'https://images-cdn.ubuy.co.in/64dab58344ea7d75fe319427-sony-playstation-5-video-game-console.jpg'
    }
];
async function createProducts() {
    await mongoose.connect('mongodb://localhost:27017/mernapp');
    try {
        await Product.insertMany(products);
        console.log('Products created successfully!');
    } catch (error) {
        console.error('Error creating products:', error);
    }
}

createProducts();