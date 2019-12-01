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

	private String lastName;

	private String email;
	
	private String stato;

	private String password;

	public User(){

	}

	public User(final long id, final String name, final String lastName, final String email, final String stato, final String password) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.stato = stato;
		this.password = password;
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
		return "" + id + "" + name + "" + lastName + "" + stato + "" + email + "" + password;
	}

	public String getemail() {
		return email;
	}

	public void setemail(final String email) {
		this.email = email;
	}

	public String getpassword() {
		return password;
	}

	public void setpassword(final String password) {
        this.password = password;
	}

	public String getstato() {
		return stato;
	}

	public void setstato(final String stato) {
        this.stato = stato;
	}

	public String getlastNamw() {
		return lastName;
	}

	public void setlastName(final String lastName) {
		this.lastName = lastName;
	}




}