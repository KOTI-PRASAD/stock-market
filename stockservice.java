// StockService.java - Backend
public class StockService {
    // Add stock to portfolio
    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    // Calculate portfolio value by fetching live stock prices
    public double calculatePortfolioValue() {
        List<Stock> stocks = stockRepository.findAll();
        double totalValue = 0.0;
        for (Stock stock : stocks) {
            double currentPrice = stockPriceService.getStockPrice(stock.getTicker());
            totalValue += stock.getQuantity() * currentPrice;
        }
        return totalValue;
    }
}
