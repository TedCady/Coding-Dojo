package mace.dojo_overflow.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import mace.dojo_overflow.models.Tag;

@Repository
public interface TagRepository extends CrudRepository<Tag, Long> {
    // this method retrieves all the Tags from the database
    List<Tag> findAll();
    // this method finds Tags with descriptions containing the search string
    Optional<Tag> findByTagIs(String tag);
//    // this method counts how many titles contain a certain string
//    Long countByTitleContaining(String search);
//    // this method deletes a Tag that starts with a specific title
//    Long deleteByTitleStartingWith(String search);
}
