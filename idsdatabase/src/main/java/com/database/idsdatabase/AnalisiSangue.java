package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AnalisiSangue
{

    @Id
    private long id;
    private String name;
    
	public AnalisiSangue(final long id, final String name) {
        this.id = id;
        this.name = name;
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
		return  id + "" + name ;
	}
}