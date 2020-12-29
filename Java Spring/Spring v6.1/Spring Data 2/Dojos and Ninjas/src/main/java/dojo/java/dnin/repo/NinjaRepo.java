package dojo.java.dnin.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dojo.java.dnin.model.Ninja;


@Repository
public interface NinjaRepo extends CrudRepository<Ninja, Long>{
	 // this method retrieves all the books from the database
	 List<Ninja> findAll();
	 // this method finds books with descriptions containing the search string
	 List<Ninja> findByDojo_Id(Long search);
//	 // this method counts how many titles contain a certain string
//	 Long countByTitleContaining(String search);
//	 // this method deletes a book that starts with a specific title
//	 Long deleteByTitleStartingWith(String search);
}

