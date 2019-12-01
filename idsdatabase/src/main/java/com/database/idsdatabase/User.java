package com.database.idsdatabase;

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

	private String email;
	
	public User(){

	}

	public User(final long id, final String name, final String email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}

	public long getid() {
		return id;
	}

	public void setid(final Long id) {
		this.id = id;
	}

	public String getname() {
		return name;
	}

	public void setname(final String name) {
        this.name = name;
	}

	@Override
	public String toString(){
		return "" + id + "" + name + "" + email;
	}

	public String getemail() {
		return email;
	}

	public void setemail(final String email) {
		this.email = email;
	}




}