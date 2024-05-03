const velg = document.getElementById("velg");
const antall = document.getElementById("antall");
const fornavn = document.getElementById("fornavn");
const etternavn = document.getElementById("etternavn");
const telefonnr = document.getElementById("telefonnr");
const epost = document.getElementById("epost");
function registrer() {

    if (velg.value.length === 0) {
        document.getElementById("film-text").innerHTML = "Du må velge en film"

    } else {
        document.getElementById("film-text").innerHTML = ""
    }
    if (!antall.value) {
        document.getElementById("antall-text").innerHTML = "Du må skrive antall"

    } else {
        document.getElementById("antall-text").innerHTML = ""
    }
    if (fornavn.value.length === 0) {
        document.getElementById("fornavn-text").innerHTML = "Du må skrive fornavn"

    } else {
        document.getElementById("fornavn-text").innerHTML = ""
    }
    if (etternavn.value.length === 0) {
        document.getElementById("etter-text").innerHTML = "Du må skrive etternavn"
    } else {
        document.getElementById("etter-text").innerHTML = ""
    }
    if (telefonnr.value.length === 0) {
        document.getElementById("tel-text").innerHTML = "Du må skrive tel"

    } else {
        document.getElementById("tel-text").innerHTML = ""

    }
    if (epost.value.length === 0) {
        document.getElementById("E-text").innerHTML = "Du må skrive e-post"
    } else {
        document.getElementById("E-text").innerHTML = ""
    }
     if (velg.value && antall.value &&fornavn.value && etternavn.value && telefonnr.value &&epost.value) {
        const billet = {
            velg: velg.value,
            antall: antall.value,
            fornavn: fornavn.value,
            etternavn: etternavn.value,
            telefonnr: telefonnr.value,
            epost: epost.value
        };
        $.post("/saveInfo", billet, function (){
            hentKunde();
        })

    }
}
function hentKunde(){
    $.get("/getInfo", function (data){
        lagTable(data)

    })
}
function lagTable (tickets) {
    let ut = "<table class= 'table table-dark'><tr><th>Film</th><th>Antall Billetter</th><th>Fornavn</th><th>Etternavn</th><th>TelefonNummer</th><th>E-post</th></tr>";
    for (const billet of tickets) {
        ut += "<tr><td>" + billet.velg + "</td><td>" + billet.antall + "</td><td>" + billet.fornavn + "</td>" +
            "<td>" + billet.etternavn + "</td> <td>" + billet.telefonnr + "</td><td>" + billet.epost + "</td></tr>";
       $("#visInfo").html(ut);

    }
}
function sletteAlt(){
$.get("/slett", function (){
$("#visInfo").html("");
})
}