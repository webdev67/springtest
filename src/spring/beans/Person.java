package beans;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.context.annotation.ComponentScan;
@ComponentScan
@Entity
public class Person {	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String age;
	@OneToMany(cascade= CascadeType.ALL)
	@JoinColumn(name = "person_id")
	private Set<Hobby> hobbies = new HashSet<>();
	
	public Set<Hobby> getHobbies() {
		return hobbies;
	}
	public void setHobbies(ArrayList<String> hobby) {
		hobby.forEach(hob -> {
			Hobby h = new Hobby();
			h.setHobby(hob);
			this.hobbies.add(h);
		});
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
