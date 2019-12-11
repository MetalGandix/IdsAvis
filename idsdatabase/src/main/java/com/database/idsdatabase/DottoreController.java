package com.database.idsdatabase;

import java.util.List;
import com.database.idsdatabase.Dottore;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DottoreController {

    public DottoreController(DottoreRepository dottoreRepository) {
        this.dottoreRepository = dottoreRepository;
    }
     
    private DottoreRepository dottoreRepository;
 
    @GetMapping("/dottori")
    public List<Dottore> getDottori() {
        return (List<Dottore>) dottoreRepository.findAll();
    }
 
    @PostMapping("/dottori")
    void addDottore(@RequestBody Dottore dottore) {
        dottoreRepository.save(dottore);
    }
}