package com.database.idsdatabase.dto;


public class UserDTO {
	private String username;
	private String password;
	private String name;
	private String lastname;
	private String email;
	private String stato;
	private String emergenza;


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStato() {
		return stato;
	}

	public void setStato(String stato) {
		this.stato = stato;
	}

	public String getEmergenza() {
		return emergenza;
	   }
	  
	   public void setEmergenza(final String emergenza) {
		this.emergenza = emergenza;
	   }


}