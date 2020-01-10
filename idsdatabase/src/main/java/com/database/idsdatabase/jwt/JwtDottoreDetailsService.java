package com.database.idsdatabase.jwt;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.database.idsdatabase.repository.DottoreDao;
import com.database.idsdatabase.entity.Dottore;
import com.database.idsdatabase.dto.DottoreDTO;

@Service
public class JwtDottoreDetailsService implements UserDetailsService {

	@Autowired
	private DottoreDao dottoreDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Dottore dottore = dottoreDao.findByUsername(username);
		if (dottore == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(dottore.getusername(), dottore.getpassword(),
				new ArrayList<>());
	}
	
	public Dottore save(DottoreDTO dottore) {
		Dottore newDottore = new Dottore();
		newDottore.setusername(dottore.getUsername());
		newDottore.setpassword(bcryptEncoder.encode(dottore.getPassword()));
		return dottoreDao.save(newDottore);
	}

	/*
	public void delete(String username) {
		DAOUser user = userDao.findByUsername(username);
		userDao.delete(user);
	}
	*/
}