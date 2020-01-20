package com.database.idsdatabase.controller;

import java.util.List;

import com.database.idsdatabase.dto.UserDTO;
import com.database.idsdatabase.entity.DAOUser;
import com.database.idsdatabase.jwt.JwtUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
    @Autowired
    private JwtUserDetailsService userRepository;
 
    //@PreAuthorize("hasRole('AVIS')")
    @GetMapping("/users")
    public List<DAOUser> getUser() {
        return userRepository.findAll();
    }
 
    
    @PostMapping("/user")
    void addUser(@RequestBody UserDTO user) {
        userRepository.save(user);
    }

   /* @GetMapping("/existUser/{username}")
    public boolean existUser(String username){
        List<DAOUser> users = getUser();
        boolean userFound = false;
        users.forEach(u->{
            if(u.getUsername()==username){
                userFound=true;
            }
        });*/
    }



