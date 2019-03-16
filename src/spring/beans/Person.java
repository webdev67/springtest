package beans;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.context.annotation.ComponentScan;
@ComponentScan
@Entity
public class Person {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String age;
	private String hobbies;
	
	public String getHobbies() {
		return hobbies;
	}
	public void setHobbies(ArrayList<String> hobbies) {
		this.hobbies = StringUtils.join(hobbies,',');
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getId() {
		return id;
	}
	
}
