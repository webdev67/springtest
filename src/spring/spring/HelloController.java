package spring;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import beans.Person;
import services.PersonService;

@Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {
	@Autowired PersonService ps;
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
		ps.createPerson(p);
		return true;
	}
	
	@PostMapping("/deletePerson")
	public boolean deletePerson(@RequestBody Person p) {
		ps.deletePerson(p);
		return true;
	}
}