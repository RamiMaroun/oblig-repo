package com.example.kino_3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRepository {
    @Autowired
    private JdbcTemplate db;
    public void saveInfo(Kunde innKunde){
        String sql ="INSERT INTO KUNDE (velg, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innKunde.getVelg(), innKunde.getAntall(), innKunde.getFornavn(), innKunde.getEtternavn()
        , innKunde.getTelefonnr(), innKunde.getEpost());
    }
    public List<Kunde> getInfo(){
        String sql ="SELECT * FROM KUNDE";
        List<Kunde> allKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return allKunder;
    }
    public void slettAlt(){
        String sql ="DELETE FROM KUNDE";
        db.update(sql);
    }
}
