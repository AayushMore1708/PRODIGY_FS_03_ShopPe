import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [name, setName] = useState('');
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/items', { name })
      .then(response => {
        console.log(response.data);
        setName('');
      })
      .catch(error => {
        console.error('There was an error adding the item!', error);
      });
  };


  function Car(props) {
    return <li>I am a {props.brand}</li>;
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        required

      />
      <button type="submit">Add New Item</button>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </form>
  );
};


export default ItemForm;
