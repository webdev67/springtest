package services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import beans.Hobby;
import repositories.HobbyRepository;

@Service
public class HobbyService {
	@Autowired 
	private HobbyRepository hr;
	@PersistenceContext
	private EntityManager em;
	
	public List<Hobby> getHobbies() {
		return this.hr.findAll();
	}
	
	public EntityManager getEntityManager() {
		return this.em;
	}
	
	public Optional<Hobby> getHobby(long id) {
		return this.hr.findById(id);
	}
}
