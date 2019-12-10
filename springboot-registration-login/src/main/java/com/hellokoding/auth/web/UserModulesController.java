package com.hellokoding.auth.web;

import java.util.List;
import com.hellokoding.auth.model.UserModules;
import com.hellokoding.auth.repository.UserModulesRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserModulesController {

    public UserModulesController(UserModulesRepository userModulesRepository) {
        this.userModulesRepository = userModulesRepository;
    }
     
    private UserModulesRepository userModulesRepository;
 
    @GetMapping("/users")
    public List<UserModules> getUsers() {
        return (List<UserModules>) userModulesRepository.findAll();
    }
 
    @PostMapping("/users")
    void addUser(@RequestBody UserModules userModules) {
        userModulesRepository.save(userModules);
    }
}