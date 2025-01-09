CREATE USER 'stockuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON stock_portfolio.* TO 'stockuser'@'localhost';
FLUSH PRIVILEGES;
