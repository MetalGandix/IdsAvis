package com.database.idsdatabase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Donazione{

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private String data;

    private String ora;

    public long getid() {
		return id;
	}

	public void setid(final Long id) {
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
}