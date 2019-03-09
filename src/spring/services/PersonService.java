package services;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Person;
import repositories.PersonRepository;

@Service
public class PersonService {
	@Autowired
	private PersonRepository pr;
	private EntityManager em;

	public PersonService(EntityManager em) {
		this.em = em;
	}

	public void doSave(Person p) {
		Session s = this.em.unwrap(Session.class);
		org.hibernate.Transaction tx = s.beginTransaction();
		s.persist(p);
		tx.commit();
		s.close();
	}

	public void savePerson(String p) {
		ObjectMapper mapper = new ObjectMapper();
		TypeReference<List<Person>> typeReference = new TypeReference<List<Person>>() {
		};
		try {
			List<Person> users = mapper.readValue(p, typeReference);
			this.pr.saveAll(users);
			System.out.println("Users Saved!");
		} catch (IOException e) {
			System.out.println("Unable to save users: " + e.getMessage());
		}
	}

	public void deletePerson(int id) {
		try {
			this.pr.deleteById((long) id);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	public void updatePerson(int id, String p) throws JsonParseException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();
		TypeReference<List<Person>> typeReference = new TypeReference<List<Person>>() {};
		Optional<Person> person = this.pr.findById((long)id);
		List<Person> givenPerson = mapper.readValue(p, typeReference);
		person.get().setAge(givenPerson.get(0).getAge());
		person.get().setName(givenPerson.get(0).getName());
		person.get().setHobbies(new ArrayList<String>(Arrays.asList(givenPerson.get(0).getHobbies().split(","))));
		this.pr.save(person.get());
	}
}
