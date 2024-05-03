package com.example.kino_3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class KundeController {
    @Autowired
    private KundeRepository rep;
    @PostMapping("/saveInfo")
    public void lagerkunde(Kunde innKunde){
        rep.saveInfo(innKunde);
    }
    @GetMapping("/getInfo")
    public List<Kunde>getAlleKunder (){
        return rep.getInfo();
    }
    @GetMapping("/slett")
    public void slettKunde(){
        rep.slettAlt();
    }

}

