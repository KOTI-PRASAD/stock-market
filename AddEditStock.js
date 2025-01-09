import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddEditStock = () => {
  const [stock, setStock] = useState({
    name: '',
    ticker: '',
    quantity: 0,
    buyPrice: 0
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      fetchStock(id);
    }
  }, [id]);

  const fetchStock = async (id) => {
    try {
      const response = await axios.get(`https://your-backend-url/api/stocks/${id}`);
      setStock(response.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStock((prevStock) => ({
      ...prevStock,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`https://your-backend-url/api/stocks/${id}`, stock);
      } else {
        await axios.post('https://your-backend-url/api/stocks', stock);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving stock:', error);
    }
  };

  return (
    <div className="add-edit-stock">
      <h1>{isEditMode ? 'Edit Stock' : 'Add Stock'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Stock Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={stock.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticker">Ticker</label>
          <input
            type="text"
            id="ticker"
            name="ticker"
            value={stock.ticker}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={stock.quantity}
            onChange={handleInputChange}
            required
            min="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="buyPrice">Buy Price</label>
          <input
            type="number"
            id="buyPrice"
            name="buyPrice"
            value={stock.buyPrice}
            onChange={handleInputChange}
            required
            min="0.01"
          />
        </div>
        <button type="submit" className="btn-submit">
          {isEditMode ? 'Update Stock' : 'Add Stock'}
        </button>
      </form>
    </div>
  );
};

export default AddEditStock;
