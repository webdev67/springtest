package spring;

import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.MediaType;
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

}