package spring;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Person;
import repositories.PersonRepository;
import services.PersonService;

@RestController
public class HelloController {
	@Autowired PersonService ps;
    @PersistenceContext
	EntityManager em;
	private String response;
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    
    @RequestMapping(value = "/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map json() {
    	String[] myarray = new String[] {"a","b","c","d"};
        return Collections.singletonMap("response", myarray);
    }
    @CrossOrigin(origins = "http://localhost:4201")
    @RequestMapping(value = "/pojo", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map pojo() {
    	ObjectMapper mapper = new ObjectMapper();
		//By default all fields without explicit view definition are included, disable this
    	Person a = new Person();
    	a.setName("rami");
    	a.setAge("35");
    	ArrayList<String> hobbies = new ArrayList<String>();
    	hobbies.add("running");
    	hobbies.add("motorcycles");
    	a.setHobbies(hobbies);
        return Collections.singletonMap("response", a);
    }
    
    @CrossOrigin(origins = "http://localhost:4201")
    @RequestMapping(value = "/hibernate", produces = MediaType.APPLICATION_JSON_VALUE)
    public String hibernate() {
    	Person a = new Person();
    	a.setName("rami");
    	ps.doSave(a);
    	return "Test";
    }
    
    @RequestMapping(value = "/parsejson", produces = MediaType.APPLICATION_JSON_VALUE)
    public String parseJson(@RequestBody String body) {
    	ps.savePerson(body);
    	return body;
    }
    
    @RequestMapping(value = "/delete", produces = MediaType.APPLICATION_JSON_VALUE)
    public String deletePerson(@RequestParam("id") String id) {
    	ps.deletePerson(Integer.parseInt(id));
    	return "done";
    }
    
    @RequestMapping(value = "/update", produces = MediaType.APPLICATION_JSON_VALUE)
    public String updatePerson(@RequestParam("id") String id, @RequestBody String body) throws JsonParseException, JsonMappingException, NumberFormatException, IOException {
    	ps.updatePerson(Integer.parseInt(id), body);
    	return "done";
    }

}