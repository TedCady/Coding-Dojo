package dojo.java.pac.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dojo.java.pac.model.Category;


@Repository
public interface CRepo extends CrudRepository<Category, Long>{
	 // this method retrieves all the books from the database
	 List<Category> findAll();
	 // this method finds books with descriptions containing the search string
//	 List<Dojo> findByCreatorContaining(String search);
//	 // this method counts how many titles contain a certain string
	 Long countByNameContaining(String search);
//	 // this method deletes a book that starts with a specific title
//	 Long deleteByTitleStartingWith(String search);
}

