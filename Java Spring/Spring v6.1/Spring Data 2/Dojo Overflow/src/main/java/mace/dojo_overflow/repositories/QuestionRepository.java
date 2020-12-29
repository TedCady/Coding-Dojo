package mace.dojo_overflow.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import mace.dojo_overflow.models.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {
    // this method retrieves all the Questions from the database
    List<Question> findAll();
    // this method finds Questions with descriptions containing the search string
    Optional<Question> findByQuestionIs(String question);
    // this method counts how many titles contain a certain string
//    Long countByTitleContaining(String search);
//    // this method deletes a Question that starts with a specific title
//    Long deleteByTitleStartingWith(String search);
}
