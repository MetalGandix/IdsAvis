package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dottore{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String password;

    public String getusername(){
        return username;
    }

    public void setusername(final String username){
        this.username = username;
    }

    public String getpassword(){
        return password;
    }

    public void setpassword(final String password){
        this.password = password;
    }


}