package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Donazione{

    @Id
    private long id;

    private String data;

    private String ora;

    public long getid() {
		return id;
	}

	public void setid(final long id) {
		this.id = id;
	}

    public String getdata() {
		return data;
	}

	public void setdata(final String data) {
		this.data = data;
	}

    public String getora() {
		return ora;
	}

	public void setora(final String ora) {
		this.ora = ora;
    }
    
    @ManyToOne
    private User name;

    public User getUser(){
        return name;
    }

    public void setUser(User name){
        this.name = name;
    }
}