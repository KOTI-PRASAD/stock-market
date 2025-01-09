// Fetch stock portfolio value
fetch("https://your-backend.herokuapp.com/api/stocks/portfolio-value")
  .then(response => response.json())
  .then(data => setPortfolioValue(data));  // Set the total portfolio value dynamically
