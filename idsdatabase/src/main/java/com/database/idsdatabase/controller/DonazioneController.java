package com.database.idsdatabase.controller;

import java.util.List;

import com.database.idsdatabase.entity.Donazione;
import com.database.idsdatabase.repository.DonazioneRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DonazioneController{

    public DonazioneController(DonazioneRepository donazioneRepository){
        this.donazioneRepository = donazioneRepository;
    }
    
    private DonazioneRepository donazioneRepository;

    @GetMapping("/orariDonazione")
    public List<Donazione> getDonazione(){
        List<Donazione>listaDonazione = (List<Donazione>) donazioneRepository.findAll();
        return listaDonazione;
    }

    @PostMapping("/orariDonazione")
    void addDonazione(@RequestBody Donazione donazione){
        donazioneRepository.save(donazione);
    }

    @DeleteMapping("/orariDonazione")
    public void removeDonazione(@PathVariable long id){
        donazioneRepository.deleteById(id);
    }
}