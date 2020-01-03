package com.database.idsdatabase;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnalisiSangueController {
    public AnalisiSangueController(AnalisiSangueRepository analisisangueRepository) {
        this.analisisangueRepository = analisisangueRepository;
    }

    private AnalisiSangueRepository analisisangueRepository;

    @GetMapping("/analisi")
    public List<AnalisiSangue> getAnalisi(){
        return (List<AnalisiSangue>) analisisangueRepository.findAll();
      
    }

    @PostMapping("/analisi")
    void addAnalisiSangue(@RequestBody AnalisiSangue analisisangue){
        analisisangueRepository.save(analisisangue);
    }
}