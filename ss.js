// palautteet
const OIKEA1 = "Oikea vastaus, hyvä! Kettu on plaplaa jne tähän tekstiä "
const OIKEA2 = "Oikea vastaus, hyvä! Karhu on plaplaa jne tähän tekstiä "
const OIKEA3 = "Oikea vastaus, hyvä! Orava on plaplaa jne tähän tekstiä "
const OIKEA4 = "Oikea vastaus, hyvä! Ilves on plaplaa jne tähän tekstiä "
const OIKEA5 = "Oikea vastaus, hyvä! Jänis on plaplaa jne tähän tekstiä "
const VÄÄRÄ = "Väärä vastaus, harmi! Kokeile uudelleen."
const PUUTTUU = "Vastaus puuttuu, kirjoita vastaus kuvan alla olevaan kenttään."


// vastaukset ja oikea/väärä
let right1 = document.getElementById("right1");
let right2 = document.getElementById("right2");
let right3 = document.getElementById("right3");
let right4 = document.getElementById("right4");
let right5 = document.getElementById("right5");
let wrong = document.getElementsByClassName("wrong");

let feedback1 = document.getElementById("feedback1");
let feedback2 = document.getElementById("feedback2");
let feedback3 = document.getElementById("feedback3");
let feedback4 = document.getElementById("feedback4");
let feedback5 = document.getElementById("feedback5");


function v1(){
    document.getElementById("feedback1").textContent = ""; //tyhjäys
    if (right1.checked == true){feedback1.textContent = OIKEA1;}
    else {feedback1.textContent = VÄÄRÄ;}
     //TÄÄ Nyt toimii jotenkin, kun oieka tai väärä valittu
    //else {feedback1.textContent = VÄÄRÄ; }
    // if (right1 == "") { feedback1.textContent = PUUTTUU;}
    //if (right1.checked == false && wrong == "" ) {feedback1.textContent = PUUTTUU;}KOKEILU JOS SAIS TÄN MUTTEI TOIMI
}

function v2(){
    document.getElementById("feedback2").textContent = ""; //tyhjäys
    if (right2.checked == true){feedback2.textContent = OIKEA2;}
    else {feedback2.textContent = VÄÄRÄ;}
    }

    function v3(){
        document.getElementById("feedback3").textContent = ""; //tyhjäys
        if (right3.checked == true){feedback3.textContent = OIKEA3;}
        else {feedback3.textContent = VÄÄRÄ;}
        } 
function v4(){
    document.getElementById("feedback4").textContent = ""; //tyhjäys
    if (right4.checked == true){feedback4.textContent = OIKEA4;}
    else {feedback4.textContent = VÄÄRÄ;}
    }

function v5(){
    document.getElementById("feedback5").textContent = ""; //tyhjäys
    if (right5.checked == true){feedback5.textContent = OIKEA5;}
    else {feedback5.textContent = VÄÄRÄ;}
    }