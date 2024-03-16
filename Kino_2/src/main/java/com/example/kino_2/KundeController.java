package com.example.kino_2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class KundeController {
    public final List<Kunde>alleKunder=new ArrayList<>();
    @PostMapping("/saveInfo")
    public void lagerkunde(Kunde innKunde){
        alleKunder.add(innKunde);
    }
    @GetMapping("/getInfo")
    public List<Kunde>getAlleKunder (){
        return alleKunder;
    }
    @GetMapping("/slett")
    public void slettKunde(){
        alleKunder.clear();
    }

}

