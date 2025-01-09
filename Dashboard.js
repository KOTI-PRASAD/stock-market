import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get('https://your-backend-url/api/stocks');
      setStocks(response.data);

      const value = response.data.reduce(
        (acc, stock) => acc + stock.quantity * stock.buyPrice,
        0
      );
      setPortfolioValue(value);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const deleteStock = async (id) => {
    try {
      await axios.delete(`https://your-backend-url/api/stocks/${id}`);
      fetchStocks();
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Portfolio Dashboard</h1>
      <div className="portfolio-metrics">
        <p>Total Portfolio Value: ${portfolioValue.toFixed(2)}</p>
      </div>
      <Link to="/add" className="btn-add">Add Stock</Link>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.buyPrice.toFixed(2)}</td>
              <td>
                <Link to={`/edit/${stock.id}`} className="btn-edit">Edit</Link>
                <button onClick={() => deleteStock(stock.id)} className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
