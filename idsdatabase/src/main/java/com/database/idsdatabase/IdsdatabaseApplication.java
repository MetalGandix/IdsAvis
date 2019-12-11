package com.database.idsdatabase;

import java.util.stream.Stream;
import com.database.idsdatabase.Dottore;
import com.database.idsdatabase.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class IdsdatabaseApplication {

    public static void main(String[] args) {
        SpringApplication.run(IdsdatabaseApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository, DottoreRepository dottoreRepository) {
        return args -> {
            Stream.of("Utente").forEach(name -> {
                User user = new User(0, name, name.toLowerCase() + "@domain.com", name, name, name);

                userRepository.save(user);
            });

            Stream.of("Dottore").forEach(email -> {
                Dottore dottore = new Dottore(0, email.toLowerCase() + "@domain.com", email);

                dottoreRepository.save(dottore);
            });
                
                
            
            userRepository.findAll().forEach(System.out::println);
            dottoreRepository.findAll().forEach(System.out::println);
        };

    }
}