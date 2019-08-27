package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import beans.Hobby;
@Repository
public interface HobbyRepository extends JpaRepository<Hobby, Long> {
	
}
