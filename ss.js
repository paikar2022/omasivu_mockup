// palautteet
const OIKEA1 = "Oikea vastaus, hyvä! Kettu on plaplaa jne tähän tekstiä "
const OIKEA2 = "Oikea vastaus, hyvä! Karhu on plaplaa jne tähän tekstiä "
const OIKEA3 = "Oikea vastaus, hyvä! Orava on plaplaa jne tähän tekstiä "
const OIKEA4 = "Oikea vastaus, hyvä! Jänis on plaplaa jne tähän tekstiä "
const OIKEA5 = "Oikea vastaus, hyvä! Ilves on plaplaa jne tähän tekstiä "
const VÄÄRÄ = "Väärä vastaus, harmi! Kokeile uudelleen."
const PUUTTUU = "Vastaus puuttuu, kirjoita vastaus kuvan alla olevaan kenttään."

// vastaukset ja oikea/väärä
let answer1 = document.getElementById("right1");
let answer2 = document.getElementById("right2");
let answer3 = document.getElementById("right3");
let answer4 = document.getElementById("right4");
let answer5 = document.getElementById("right5");
let wrong = document.getElementById("wrong");



function v1(){
    //tähän siit äclassification tms tehtävästä et jos valitsee väärän niin... ja jos oikeen niin...
    let answer1 = document.getElementById("answer1").value;
    let result1 = document.getElementById("result1");
    
    if (answer1 == "kettu"){result1.textContent = OIKEA1;}
    else {result1.textContent = VÄÄRÄ; }
    if (answer1 == "") { result1.textContent = PUUTTUU;}

}

function v2(){
    document.getElementById("result2").innerHTML = ""; //vastauksen poisto
    let answer2 = document.getElementById("answer2").value;
    let result2 = document.getElementById("result2");
    
    if (answer2 == "karhu"){ result2.textContent = OIKEA2;}
    else {result2.textContent  = VÄÄRÄ; }
    if (answer2 == "") { result2.textContent = PUUTTUU;}
    }

function v3(){
    document.getElementById("result3").innerHTML = ""; //vastauksen poisto
    let answer3 = document.getElementById("answer3").value;
    let result3 = document.getElementById("result3");
    
    if (answer3 == "orava"){result3.textContent = OIKEA3;}
    else {result3.textContent = VÄÄRÄ; }
    if (answer3 == "") {result3.textContent = PUUTTUU;}
    }   
function v4(){
    document.getElementById("result4").innerHTML = ""; //vastauksen poisto
    let answer4 = document.getElementById("answer4").value;
    let result4 = document.getElementById("result4");
    
    if (answer4 == "jänis"){result4.textContent = OIKEA4;}
    else {result4.textContent = VÄÄRÄ; }
    if (answer4 == "") {result4.textContent = PUUTTUU;}
    }

function v5(){
    document.getElementById("result5").innerHTML = ""; //vastauksen poisto
    let answer5 = document.getElementById("answer5").value;
    let result5 = document.getElementById("result5");
    
    if (answer5 == "ilves"){result5.textContent = OIKEA5;}
    else {result5.textContent = VÄÄRÄ; }
    if (answer5 == "") {result5.textContent = PUUTTUU;}
    }