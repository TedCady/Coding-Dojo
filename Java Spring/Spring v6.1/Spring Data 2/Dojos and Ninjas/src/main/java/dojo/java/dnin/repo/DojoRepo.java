package dojo.java.dnin.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dojo.java.dnin.model.Dojo;


@Repository
public interface DojoRepo extends CrudRepository<Dojo, Long>{
	 // this method retrieves all the books from the database
	 List<Dojo> findAll();
	 Dojo findByName(String search);
	 // this method finds books with descriptions containing the search string
//	 List<Dojo> findByCreatorContaining(String search);
//	 // this method counts how many titles contain a certain string
//	 Long countByTitleContaining(String search);
//	 // this method deletes a book that starts with a specific title
//	 Long deleteByTitleStartingWith(String search);
}

