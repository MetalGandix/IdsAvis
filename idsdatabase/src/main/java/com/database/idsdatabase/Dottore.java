package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Dottore {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private String email;

    private String password;
    
    private long id;

	public Dottore(){

	}

	public Dottore(final String password,final String email,long id) {
		this.email = email;
        this.password = password;
        this.id = id;
	}

	@Override
	public String toString(){
		return "" + id + "" + email + "" + password;
    }
    
    public long getid() {
		return id;
	}

	public void setid(final Long id) {
		this.id = id;
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




}