package com.example.kino_3;

public class Kunde {
     String velg ;
     int antall ;
     String fornavn;
     String etternavn ;
     String telefonnr;
     String epost;

    public  Kunde (){

    }

    public Kunde(String velg, int antall, String fornavn, String etternavn, String telefonnr, String epost) {
        this.velg = velg;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    public String getVelg() {
        return velg;
    }

    public void setVelg(String velg) {
        this.velg = velg;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}



