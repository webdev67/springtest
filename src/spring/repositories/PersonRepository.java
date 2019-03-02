package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import beans.Person;
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}