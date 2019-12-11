package com.database.idsdatabase;

import java.security.Principal;
import java.util.Base64;
import java.util.List;
<<<<<<< HEAD:idsdatabase/src/main/java/com/database/controller/UserController.java

import javax.servlet.http.HttpServletRequest;

import com.database.entity.User;
import com.database.repository.UserRepository;

=======
import com.database.idsdatabase.User;
>>>>>>> 91de31a2e581f2d05b9f2f85ea68d9c88e94e10d:idsdatabase/src/main/java/com/database/idsdatabase/UserController.java
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

    @RequestMapping("/login")
    public boolean login(@RequestBody User user) {
        return user.getname().equals("user") && user.getpassword().equals("password");
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}