window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemFormazas1();
    esemenyKez();
    esemenyKez2();

   
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0];
   let tartalom = ELEM.innerHTML;
    console.log(tartalom);
}
function elemekElerese2() {
    const ELEM=document.querySelectorAll("#ide")[0];
    ELEM.innerHTML = "Jó reggelt!";

    
}
function elemekElerese3(){
    const ELEM=document.querySelectorAll(".ide")[0];
    ELEM.innerHTML = "Jó reggelt!";
}
function elemekElerese4(){
    let lista = [];
    let szoveg = "<ul>";
    for(let i = 0; i < 5; i++){
        let szam =  Math.random()* 21 + 10;
       let egesz = Math.floor(szam);
        lista.push(egesz);
    }
    console.log(lista);
    for(let c = 0; c < lista.length; c++){
        szoveg += "<li>" + (lista[c]) + "</li>";
    }
    szoveg += "</ul>";
    console.log(szoveg);
    const ELEM=document.querySelectorAll(".lista")[0];
    ELEM.innerHTML = szoveg;

}
function elemFormazas1(){
    const ELEM=document.querySelectorAll(".lista")[0];
    ELEM.classList.add("formazott");
}
function esemenyKez(){
    const ELEM=document.querySelectorAll(".lista")[0];
    ELEM.addEventListener("click",fuggvenynev);
}
function fuggvenynev(){
    const ELEM=document.querySelectorAll(".lista")[0];
    console.log("lefutott");
    const katt = document.querySelectorAll(".kattintasutan")[0];
    katt.appendChild(ELEM);
}
function esemenyKez2(){
    const ELEM=document.querySelectorAll(".feladat")[0];
    ELEM.innerHTML = "<button>OK</button>";
    const GOMB=document.querySelectorAll(".feladat button")[0];
    GOMB.addEventListener("click",gombnyomas);

}
function gombnyomas(){
    const ELEM=document.querySelectorAll(".feladat")[0];
    const GOMB=document.querySelectorAll(".feladat button")[0];
    ELEM.innerHTML = "gyaaa";
}
