package com.database.idsdatabase;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String name;

    private String password;

    private String email;

	public User(long id, String name, String email) {

		getid();
		setid(id);

		getname();
		setname(name);

		getemail();
		setemail(email);

		toString();

	}

	public long getid() {
		return id;
	}

	public void setid(Long id) {
		this.id = id;
	}

	public String getname() {
		return name;
	}

	public void setname(String name) {
        this.name = name;
	}

	@Override
	public String toString(){
		return "" + id + "" + name + "" + email;
	}

	public String getpassword() {
		return password;
	}

	public void setpassword(String password) {
        this.password = password;
	}

	public String getemail() {
		return email;
	}

	public void setemail(String email) {
		this.email = email;
	}



	public List<User> getAllUsers() {
		return null;
	}



}