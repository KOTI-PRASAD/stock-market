
    package com.example.stockportfolio.service;

import com.example.stockportfolio.model.Stock;
import com.example.stockportfolio.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    private final StockRepository stockRepository;

    @Autowired
    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock updateStock(Long id, Stock stockDetails) {
        Optional<Stock> stockOptional = stockRepository.findById(id);
        if (stockOptional.isPresent()) {
            Stock stock = stockOptional.get();
            stock.setName(stockDetails.getName());
            stock.setTicker(stockDetails.getTicker());
            stock.setQuantity(stockDetails.getQuantity());
            stock.setBuyPrice(stockDetails.getBuyPrice());
            return stockRepository.save(stock);
        }
        return null;
    }

    public boolean deleteStock(Long id) {
        Optional<Stock> stockOptional = stockRepository.findById(id);
        if (stockOptional.isPresent()) {
            stockRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public double calculatePortfolioValue() {
        List<Stock> stocks = stockRepository.findAll();
        return stocks.stream().mapToDouble(stock -> stock.getQuantity() * stock.getBuyPrice()).sum();
    }
}


