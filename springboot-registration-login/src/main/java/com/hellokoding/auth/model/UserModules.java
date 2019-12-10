package com.hellokoding.auth.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class UserModules {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String name;

	private String lastname;

	private String email;
	
	private String stato;

    private long age;

	public UserModules(int i, String name2, String string, String name3, String name4, String name5){

	}

	public UserModules(final long id, final String name, final String lastname, final String email, final String stato, final long age) {
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
        this.stato = stato;
        this.age = age;
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
		return "" + id + "" + name + "" + lastname + "" + stato + "" + email + "" + age;
	}

    public long getage() {
		return age;
	}

	public void setage(final long age) {
		this.age = age;
	}

	public String getemail() {
		return email;
	}

	public void setemail(final String email) {
		this.email = email;
	}


	public String getstato() {
		return stato;
	}

	public void setstato(final String stato) {
        this.stato = stato;
	}

	public String getlastname() {
		return lastname;
	}

	public void setlastname(final String lastname) {
		this.lastname = lastname;
	}




}