package com.database.idsdatabase.controller;

import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;

import com.database.idsdatabase.SmtpMailSender;
import com.database.idsdatabase.dto.UserDTO;
import com.database.idsdatabase.entity.DAOUser;
import com.database.idsdatabase.jwt.JwtUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
    @Autowired
    private JwtUserDetailsService userRepository;

 
    
    @PostMapping("/user")
    void addUser(@RequestBody UserDTO user) {
        userRepository.save(user);
    }

    @Autowired
	private SmtpMailSender smtpMailSender;

    @GetMapping("/users")
    public void emergenza(UserDTO donazione) throws MessagingException
    {
        smtpMailSender.send("lorenzo.brancaleoni@studenti.unicam.it", "DONAZIONE EMERGENZA", "Raggiungere l'ospedale più vicino per effettuare una donazione!!");
        smtpMailSender.send("brian.bernardini@studenti.unicam.it", "DONAZIONE EMERGENZA", "Raggiungere l'ospedale più vicino per effettuare una donazione!!");
        smtpMailSender.send("leonardo.mogianesi@studenti.unicam.it", "DONAZIONE EMERGENZA", "Raggiungere l'ospedale più vicino per effettuare una donazione!!");
       // smtpMailSender.send("andrea.polini@unicam.it", "DONAZIONE EMERGENZA", "Raggiungere l'ospedale più vicino per effettuare una donazione!!");


        
    }

   @GetMapping("/existUser/{username}")
    public boolean existUser(@PathVariable String username){
        if(userRepository.findUserByUsername(username)==null){
            return false;
        }else{
            return true;
        }
    }
}



