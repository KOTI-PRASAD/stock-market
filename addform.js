// AddStockForm.js - Form for adding new stock to the portfolio
import React, { useState } from 'react';

function AddStockForm({ addStock }) {
  const [ticker, setTicker] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [buyPrice, setBuyPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStock({ ticker, quantity, buyPrice });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Stock Ticker" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} placeholder="Buy Price" required />
      <button type="submit">Add Stock</button>
    </form>
  );
}
