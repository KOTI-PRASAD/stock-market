package com.example.stockportfolio.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

@Service
public class StockPriceService {

    @Value("${alpha.vantage.api.key}")
    private String apiKey;

    private static final String URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=1min&apikey={apiKey}";

    private final RestTemplate restTemplate;

    public StockPriceService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public double getStockPrice(String ticker) {
        String url = URL.replace("{symbol}", ticker).replace("{apiKey}", apiKey);
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        
        // Parse the JSON response (You can use a library like Jackson or Gson here to map the data)
        // For simplicity, we'll assume a mock response where we get a stock price of 100 for now
        return 100.00; // Replace this with real parsing logic
    }
}
