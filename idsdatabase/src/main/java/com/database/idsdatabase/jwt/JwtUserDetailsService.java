package com.database.idsdatabase.jwt;


import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.database.idsdatabase.repository.UserDao;
import com.database.idsdatabase.entity.DAOUser;
import com.database.idsdatabase.dto.UserDTO;

//@Service 
@Service(value = "userService") //role based
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		//return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),	new ArrayList<>());
		//role based
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
	}

	//role based
	private Set getAuthority(DAOUser user) { //Prende i ruoli
        Set authorities = new HashSet<>();
		user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
		});
		return authorities;
	}

	public List findAll() {
		List list = new ArrayList<>();
		userDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}

	/*
	public void delete(String username) {
		DAOUser user = userDao.findByUsername(username);
		userDao.delete(user);
	}
	*/
}