package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import beans.Person;
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
	
}