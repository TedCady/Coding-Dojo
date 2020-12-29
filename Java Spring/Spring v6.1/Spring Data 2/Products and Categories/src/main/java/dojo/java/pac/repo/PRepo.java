package dojo.java.pac.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dojo.java.pac.model.Product;


@Repository
public interface PRepo extends CrudRepository<Product, Long>{
	 // this method retrieves all the books from the database
	 List<Product> findAll();
	 // this method finds books with descriptions containing the search string
//	 // this method counts how many titles contain a certain string
	 Long countByNameContaining(String search);
//	 // this method deletes a book that starts with a specific title
//	 Long deleteByTitleStartingWith(String search);
}

