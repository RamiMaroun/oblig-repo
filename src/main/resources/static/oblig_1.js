let BilletRegister=[];

function registrer() {
    const velg = document.getElementById("velg").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    function validerEmail(epost) {
        // Enkel e-post validering
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(epost);
    }

    function validerTelefon(telefonnr) {
        // Egendefinert validering for telefonnummer (for eksempel åtte siffer)
        return telefonnr.length === 8;
    }

    if (velg.length === 0) {
        document.getElementById("film-text").innerHTML = "Du må velge en film"
        document.getElementById("film-text").style.color = "red"
        return; // Stop the function if validation fails
    }
    else {
        document.getElementById("film-text").innerHTML = ""

    }

    if (antall.length === 0) {
        document.getElementById("antall-text").innerHTML = "Du må skrive antall"
        document.getElementById("antall-text").style.color = "red"
        return;
    }
    else{
        document.getElementById("antall-text").innerHTML= ""
    }

    if (fornavn.length === 0) {
        document.getElementById("fornavn-text").innerHTML = "Du må skrive fornavn"
        document.getElementById("fornavn-text").style.color = "red"
        return;
    }
    else{
        document.getElementById("fornavn-text").innerHTML = ""
    }


    if (etternavn.length === 0) {
        document.getElementById("etter-text").innerHTML = "Du må skrive etternavn"
        document.getElementById("etter-text").style.color = "red"
        return;
    }
    else {
        document.getElementById("etter-text").innerHTML = ""
    }

    if (telefonnr.length === 0 || !validerTelefon(telefonnr)) {
        document.getElementById("tel-text").innerHTML = "Du må skrive tel"
        document.getElementById("tel-text").style.color = "red"
        return;
    }
    else {
        document.getElementById("tel-text").innerHTML = ""
    }

    if (epost.length === 0 || !validerEmail(epost)) {
        document.getElementById("E-text").innerHTML = "Du må skrive e-post"
        document.getElementById("E-text").style.color = "red"
        return;
    }
    else {
        document.getElementById("E-text").innerHTML = ""
    }




        const billet = {
            velg: velg,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        }
        BilletRegister.push(billet);
        //nullstill inputboksene

        document.getElementById("velg").value ="";
        document.getElementById("antall").value ="";
         document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value ="";
         document.getElementById("telefonnr").value ="";
         document.getElementById("epost").value ="";
        for (const billet of BilletRegister){
            document.getElementById("tic").innerHTML +=
                "<tr>" +
                "<td>"+billet.velg+"</td>"+
                "<td>"+billet.antall+"</td>"+
                "<td>"+ billet.fornavn+ "</td>"+
                "<td>"+ billet.etternavn+ "</td>"+
                "<td>"+billet.telefonnr+"</td>"+
                "<td>"+billet.epost+"</td>" +
                "</tr>"
        }
}
function fjern(){
    document.getElementById("tic").innerHTML = " <table id=\"tic\">\n" +
        "        <tr>\n" +
        "            <th>Film</th>\n" +
        "            <th>Anttal</th>\n" +
        "            <th>Fornavn</th>\n" +
        "            <th>Ettenavn</th>\n" +
        "            <th>Tlf</th>\n" +
        "            <th>E-post</th>\n" +
        "\n" +
        "        </tr>\n" +
        "    </table>"

}