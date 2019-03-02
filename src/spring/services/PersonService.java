package services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import beans.Person;
import repositories.PersonRepository;

@Service
public class PersonService {
	@Autowired
	private PersonRepository pr;

	public List<Person> getPeople() {
		return this.pr.findAll();
	}
	
	public Optional<Person> getPerson(long id) {
		return this.pr.findById(id);
	}
	
	public boolean createPerson(Person p) {
		this.pr.save(p);
		return true;
	}
	public boolean deletePerson(Person p) {
		this.pr.delete(p);
		return true;
	}
}
