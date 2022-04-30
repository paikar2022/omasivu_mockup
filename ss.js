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

function start() {
    document.getElementById("kettu").style.display = "block"};

function v1(){
    document.getElementById("feedback1").textContent = ""; //tyhjäys
    if (right1.checked == true){feedback1.textContent = OIKEA1;}
    else {feedback1.textContent = VÄÄRÄ;}

    document.getElementById("seuraava2").onclick = function(){
        document.getElementById("kettu").style.display ="none";
        document.getElementById("karhu").style.display ="block";
    }
}

function v2(){
    document.getElementById("feedback2").textContent = ""; //tyhjäys
    if (right2.checked == true){feedback2.textContent = OIKEA2;}
    else {feedback2.textContent = VÄÄRÄ;}

    document.getElementById("seuraava3").onclick = function(){
        document.getElementById("karhu").style.display ="none";
        document.getElementById("orava").style.display ="block";
    }
}

function v3(){
    document.getElementById("feedback3").textContent = ""; //tyhjäys
    if (right3.checked == true){feedback3.textContent = OIKEA3;}
    else {feedback3.textContent = VÄÄRÄ;}

    document.getElementById("seuraava4").onclick = function(){
    document.getElementById("orava").style.display ="none";
    document.getElementById("ilves").style.display ="block";
    }
} 
function v4(){
    document.getElementById("feedback4").textContent = ""; //tyhjäys
    if (right4.checked == true){feedback4.textContent = OIKEA4;}
    else {feedback4.textContent = VÄÄRÄ;}

    document.getElementById("seuraava5").onclick = function(){
    document.getElementById("ilves").style.display ="none";
    document.getElementById("jänis").style.display ="block";
    }
}

function v5(){
    document.getElementById("feedback5").textContent = ""; //tyhjäys
    if (right5.checked == true){feedback5.textContent = OIKEA5;}
    else {feedback5.textContent = VÄÄRÄ;}

    document.getElementById("seuraava1").onclick = function(){
    document.getElementById("jänis").style.display ="none";
    document.getElementById("kettu").style.display ="block";
        }
    //tai tekisikö tähän vaihtoehdon että uudestaan tai lopetus ja siihen sitten lopputilanne? pitää muutes rakentaa että tyhjentää vielä kaikki jos alkaa alusta.
}

//testing array
let fox = document.getElementById("fox");
let bear = document.getElementById("bear");
let squirrel= document.getElementById("squirrel");
let lynx = document.getElementById("lynx");
let hare = document.getElementById("hare");


function randomQuestion(min, max){
    return Math.floor(Math.random() * (max - min +1) ) + min;
}

let questionsMin = Number(1);
let questionsMax = Number(questionsArray.length);
let newArray = new Array();


for (let questionsArray = [fox, bear, squirrel, lynx, hare], i = questionsArray.length; i--; ) {
    let random = questionsArray.splice(Math.floor(Math.random() * i),1)[0];
    document.getElementById("random").innerHTML += random++ + " ";
}


