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

    public AnalisiSangueController(AnalisiSangueRepository AnalisiSangueRepository) {
        this.AnalisiSangueRepository = AnalisiSangueRepository;
    }

    private AnalisiSangueRepository AnalisiSangueRepository;

    @GetMapping("/analisi")
    public List<AnalisiSangue> getAnalisiSangue(){
        List<AnalisiSangue>listaAnalisiSangue = (List<AnalisiSangue>) AnalisiSangueRepository.findAll();
        return listaAnalisiSangue;
    }

    @PostMapping("/analisi")
    void addAnalisiSangue(@RequestBody AnalisiSangue AnalisiSangue){
        AnalisiSangueRepository.save(AnalisiSangue);
    }
}