package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity // This tells Hibernate to make a table out of this class
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
 private long id;
 
 private String name;

 private String username;

 private String lastname;

 private String email;
 
 private String stato;

 private String password;

 private boolean donazioneEmergenza;

 public User(){

 }

 public User(final long id, final String name,final String username, final String lastname, final String email, final String stato, final String password, final Role ruolo, final boolean donazioneEmergenza) {
  this.id = id;
  this.name = name;
  this.username = username;
  this.lastname = lastname;
  this.email = email;
  this.stato = stato;
  this.password = password;
  this.ruolo = ruolo;
  this.donazioneEmergenza = donazioneEmergenza;
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

 public String getusername() {
       return username;
      }
     
public void setusername(final String username) {
       this.username = username;
}

 @Override
 public String toString(){
  return "" + id + "" + name + "" + "" + username + "" + lastname + "" + stato + "" + email + "" + password + "" + ruolo.getid() + "" + ruolo.getrole() ;
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

 public String getlastname() {
  return lastname;
 }

 public void setlastname(final String lastname) {
  this.lastname = lastname;
 }

 public boolean getdonazioneEmergenza() {
  return donazioneEmergenza;
 }

 public void setdonazioneEmergenza(final boolean donazioneEmergenza) {
  this.donazioneEmergenza = donazioneEmergenza;
 }

 @ManyToOne
 private Role ruolo;
 
 public Role getRuolo(){
  return ruolo;
 }

 public void setRuolo(Role ruolo){
  this.ruolo = ruolo;
 }


}