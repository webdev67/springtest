package spring;

import java.util.List;
import java.util.Optional;

import javax.persistence.Query;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import beans.Hobby;
import beans.Person;
import services.HobbyService;
import services.PersonService;

@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {
	@Autowired PersonService ps;
	@Autowired HobbyService hs;
	@GetMapping("/person")
	public @ResponseBody List<Person> getPeople() {
		return ps.getPeople();
	}
	
	@GetMapping("/person/{id}")
	public Optional<Person> getPerson(@PathVariable("id") long id) {
		return ps.getPerson(id);
	}
	
	@PostMapping("/person")
	public boolean createPerson(@RequestBody Person p) {
		System.out.println(p.getHobbies());
		ps.createPerson(p);
		return true;
	}
	
	@PostMapping("/deletePerson")
	public boolean deletePerson(@RequestBody Person p) {
		ps.deletePerson(p);
		return true;
	}
	
	@GetMapping("/hobby")
	public @ResponseBody List<Hobby> getHobby() {
		return hs.getHobbies();
	}
	
	@DeleteMapping("/hobby/{id}")
	public void deleteHobby(@PathVariable("id") long id) {
		hs.deleteHobby(id);
	}
	
	@GetMapping("/hobby/{id}")
	public Optional<Hobby> getHobby(@PathVariable("id") long id) {
		return hs.getHobby(id);
	}
	
	@GetMapping("/allhobbies")
	public @ResponseBody List<Hobby> getAllHobbies() {
		List<Hobby> items = null;
		try {
		Query q = hs.getEntityManager().createQuery("select h from Hobby h order by h.hobby", Hobby.class);
		items = (List<Hobby>) q.getResultList();
		}catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		return items;
	}
}