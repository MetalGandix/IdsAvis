package com.database.idsdatabase.controller;

import java.util.List;
import com.database.idsdatabase.entity.AnalisiSangue;
import com.database.idsdatabase.repository.AnalisiSangueRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

 /*   @DeleteMapping("/analisiSangues/{analisiid}")
    public String deleteAnalisi(@PathVariable Long analisiid)
    {
        AnalisiSangue analisi = analisisangueRepository.getOne(analisiid);
        analisisangueRepository.delete(analisi);
        return "deleted";
    }
    */

   
    

    @PutMapping("/analisiSangues/{analisiid}")
    public AnalisiSangue saveOrUpdateAnalisi(@RequestBody AnalisiSangue analisi)
    {
        analisisangueRepository.save(analisi);
        return analisi;

        /*
        Per provare su POSTMAN fare: 
        public String al posto di AnalisiSangue
        return "prova"
        Se su postman esce prova, allora funziona
        */
    }



}