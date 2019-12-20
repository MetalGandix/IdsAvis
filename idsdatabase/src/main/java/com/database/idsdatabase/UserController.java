package com.database.idsdatabase;

import java.util.List;


import com.database.idsdatabase.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
     
    private UserRepository userRepository;
 
    @GetMapping("/users")
    public List<User> getUser() {
        List<User>listaUtenti = (List<User>) userRepository.findAll();
        return listaUtenti;
    }
 
    @PostMapping("/user")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }


}
