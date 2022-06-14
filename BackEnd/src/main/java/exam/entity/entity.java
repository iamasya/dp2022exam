package exam.entity;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="entity7")
public class entity {
	@Id
	@GeneratedValue
	int id;
	String name10;
	int length;
	
	
	public entity() {
		
	}
	
	
	public entity(int id, String name10, int length) {
		this.id = id;
		this.name10 = name10;
		this.length = length;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName10() {
		return name10;
	}
	public void setName10(String name10) {
		this.name10 = name10;
	}
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}


	@Override
	public String toString() {
		return "{\"id\":"+id+",\"name10\":\""+name10+"\", \"length\":"+length+"}";
	}
	

}
