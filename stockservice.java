package com.example.stockportfolio.service;

import com.example.stockportfolio.model.Stock;
import com.example.stockportfolio.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class StockService {

    private final StockRepository stockRepository;
    private final StockPriceService stockPriceService;

    private static final String[] STOCK_TICKERS = {"AAPL", "GOOGL", "AMZN", "MSFT", "TSLA", "NFLX", "FB", "NVDA", "SPY", "BABA"};

    @Autowired
    public StockService(StockRepository stockRepository, StockPriceService stockPriceService) {
        this.stockRepository = stockRepository;
        this.stockPriceService = stockPriceService;
    }

    // Add stock to the portfolio
    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    // Randomly pick 5 stocks for each user
    public List<Stock> generatePortfolio() {
        List<Stock> portfolio = new ArrayList<>();
        Random random = new Random();
        
        for (int i = 0; i < 5; i++) {
            String ticker = STOCK_TICKERS[random.nextInt(STOCK_TICKERS.length)];
            Stock stock = new Stock();
            stock.setTicker(ticker);
            stock.setName(ticker); // Set a name (could be fetched from an API if needed)
            stock.setQuantity(1); // Quantity of 1 for each stock
            stock.setBuyPrice(stockPriceService.getStockPrice(ticker)); // Fetch the stock price
            portfolio.add(stock);
        }
        
        return portfolio;
    }

    // Fetch all stocks and calculate the total portfolio value
    public double calculatePortfolioValue() {
        List<Stock> stocks = stockRepository.findAll();
        double totalValue = 0.0;
        for (Stock stock : stocks) {
            totalValue += stock.getQuantity() * stock.getBuyPrice();
        }
        return totalValue;
    }
}
