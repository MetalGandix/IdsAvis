package com.database.idsdatabase.controller;

import java.util.List;

import javax.mail.MessagingException;

import com.database.idsdatabase.SmtpMailSender;
import com.database.idsdatabase.entity.AnalisiSangue;
import com.database.idsdatabase.repository.AnalisiSangueRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

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



    @Autowired
	private SmtpMailSender smtpMailSender;

    @PutMapping("/analisiSangues/{analisiid}")
    public AnalisiSangue saveOrUpdateAnalisi(@RequestBody AnalisiSangue analisi) throws MessagingException
    {
        smtpMailSender.send(analisi.getemail(), "Test mail from Spring", analisi.getannotazione());
        analisisangueRepository.save(analisi);
        return analisi;
    }



}