package spring;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import beans.Person;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
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
    	List<String> hobbies = new ArrayList<String>();
    	hobbies.add("running");
    	hobbies.add("motorcycles");
    	a.setHobbies(hobbies);
        return Collections.singletonMap("response", a);
    }

}