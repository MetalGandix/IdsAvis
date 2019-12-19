package com.database.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role{

    @Id
    private long id;

    private String role;


public long getid() {
    return id;
}

public void setid(final Long id) {
    this.id = id;
}

public String getrole(){
    return role;
}

public void setrole(final String role) {
    this.role = role;
}


}




