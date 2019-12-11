package com.database.idsdatabase;
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


                
                
            
            userRepository.findAll().forEach(System.out::println);
            dottoreRepository.findAll().forEach(System.out::println);
        };

    }
}