// StockRepository.java - Interface to handle CRUD operations with JPA
@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {
    List<Stock> findByUserId(Long userId);
}

