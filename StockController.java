package com.example.stockportfolio.controller;

import com.example.stockportfolio.model.Stock;
import com.example.stockportfolio.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    private final StockService stockService;

    @Autowired
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    // Generate a random portfolio of 5 stocks for the user
    @PostMapping("/generate-portfolio")
    public List<Stock> generatePortfolio() {
        return stockService.generatePortfolio();
    }

    // Calculate the total portfolio value
    @GetMapping("/portfolio-value")
    public double getPortfolioValue() {
        return stockService.calculatePortfolioValue();
    }
}

