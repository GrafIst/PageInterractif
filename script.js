var dropdown = 1; //Fermé
var menu = 1; //Fermé

var surprise = 1;

var sizeMenu = "280px"; //TAILLE DU MENU LORSQUE L ECRAN EST SUPERIEUR A smallScreen WIDTH
var smallScreen = "640";   //PERMET DE CHANGER LA TAILLE MINIMUM DYNAMIQUEMENT

var width = window.innerWidth;

var firstP = document.getElementById("first-page");
var secondP = document.getElementById("second-page");

var mainBlock = document.getElementById("main");
var menuB = document.getElementById("menu");




function showContent(){ //CETTE FONCTION PERMET D'AFFICHER LE MENU DROPDOWN

  if (dropdown == 1) {
    document.getElementById("dropdown-content").style.display = "block";
    dropdown = 0;
  }
  else {
    document.getElementById("dropdown-content").style.display = "none";
    dropdown = 1;
  }
}




function showMenu(){  //CETTE FONCTION PERMET D'AFFICHER LE MENU DE GAUCHE

  var menuB = document.getElementById("menu");
  var mainBlock = document.getElementById("main");

  var sizeMenu = "280px";
  var smallScreen = "640";
  var width = window.innerWidth;

  if (menu == 1) {  //SI LE MENU EST FERME
    document.getElementById("hide-link").style.opacity = "1";
    document.getElementById("hide-link").style.width = "100%";
    // document.getElementById("hide-link").style.display = "block";

    if (width <= smallScreen) {   //SI L'ECRAN EST INFERIEUR A 640px

      mainBlock.style.width = "0px";
      mainBlock.style.marginRight = "0px";
      menuB.style.width = window.innerWidth+"px";
      menuB.style.minWidth = window.innerWidth+"px";

    }
    else {
      menuB.style.width = sizeMenu;
    }

    menu = 0;  //Le menu est ouvert
    console.log("Menu est ouvert");

  }
  else {   //SI LE MENU EST OUVERT (DONC POUR FERMER LE MENU)
    document.getElementById("hide-link").style.display = "hidden";
    document.getElementById("hide-link").style.opacity = "0";

    document.getElementById("hide-link").style.width = "0px";
    menuB.style.minWidth = "0px";
    menuB.style.width = "0px";

    if (width <= smallScreen) { //REFERMER LE MENU LORSQUE L ECRAN EST PETIT IMPLIQUE DE REDONNER LES ATTRIBUTS CSS DE BASE A LA DIV MAIN
      mainBlock.style.margin = "auto";
      mainBlock.style.width = "100vw";
      mainBlock.style.maxWidth = "1024px";
      mainBlock.style.height = "86vh";
      mainBlock.style.display = "block";
    }

    menu = 1; //Le menu est fermé
    console.log("Menu est fermé");
  }

}




    //FUNCTION SCROLL

window.onscroll = function (e) {  //ON DETECTE LE SCROLL
  var scroll = window.scrollY;
  var firstP = document.getElementById("first-page");
  var secondP = document.getElementById("second-page");

  // console.log(scroll);


  if (scroll >= 15) { //ON VERIFIE SI L UTILISATEUR A SCROLL +15px
    if (menu == 0) { //ON VERIFIE SI LE MENU EST OUVERT, SI OUI, ON LE FERME

      document.getElementById("hide-link").style.display = "none";
      menuB.style.minWidth = "0px";
      menuB.style.width = "0px";

      if (width <= smallScreen) { //REFERMER LE MENU LORSQUE L ECRAN EST PETIT IMPLIQUE DE REDONNER LES ATTRIBUTS CSS DE BASE A LA DIV MAIN
        mainBlock.style.margin = "auto";
        mainBlock.style.width = "100vw";
        mainBlock.style.maxWidth = "1024px";
        mainBlock.style.height = "86vh";
        mainBlock.style.display = "block";
      }

      menu = 1; //Le menu est fermé
    }

    firstP.classList.remove("fade-out");
    firstP.classList.add("fade-in");

    secondP.classList.remove("fade-in");
    secondP.classList.add("fade-out");

    setTimeout(function(){  //PERMET DE LAISSER LE TEMPS AU FADEIN PUIS DE FAIRE DISPARAITRE LA PREMIER PAGE
      //firstP.style.height ="0px";
      firstP.style.display = "hidden";

    }, 1000);

  }
  else{  //QUAND ON REMONTE LE SCROLL EN HAUT DE PAGE
    firstP.style.display = "hidden";
    firstP.classList.remove("fade-in");
    firstP.classList.add("fade-out");

    secondP.classList.remove("fade-out");
    secondP.classList.add("fade-in");
  }

}




function load(){ //AU CHARGEMENT DE LA PAGE

  var mot = ['centrée','grande','intéressante','pas chère','peu clair','trop grande','peu agréable'];
  var x = 1;


setInterval(function(){              //TOUTES LES 1.2s LE TEXTE EST CHANGE PAR LE PROCHAIN MOT DE LA LISTE
  document.getElementById("wordToChange").innerHTML = "Ceci est une autre section "+mot[x]+"."
  x++;
  if (x == mot.length) {   //PUIS ON REVIENT AU DEBUT
    x = 0;
  }
}, 1200);

  menu = 1;  //on s'assure que le menu est fermé

  var menuB = document.getElementById("menu");

  menuB.style.width = "0px";

  if ('scrollRestoration' in window.history) {         //PERMET DE REMETTRE LA PAGE EN HAUT AU CHARGEMENT DE LA PAGE (trouvé sur internet)
    window.history.scrollRestoration = 'manual'
  }
  window.scrollTo(0,0);

  var text = document.getElementById("hide-text");
  text.classList.remove("fade-in");                      //PERMET DE FAIRE LE FADE IN A CHAQUE RAFRAICHISSEMENT DE LA PAGE
  text.classList.add("fade-out");
}





function resetSize(){   //PERMET DE REDIMENSIONNER LE MENU ET LA DIVISION MAIN LORSQUE L UTILISATEUR REDIMENSIONNE LA PAGE

  var width = window.innerWidth;
  var menuB = document.getElementById("menu");
  var mainBlock = document.getElementById("main");

    console.log("variables:"+menu);

  if (menu == 0) {   //SI LE MENU EST FERME (FERMER -> OUVERT)
    console.log("Menu est ouvert");
    if (width < smallScreen) {   //SI L ECRAN EST PETIT
      menuB.style.width = window.innerWidth+"px";
      mainBlock.style.width = "0px";

      mainBlock.style.paddingLeft ="0px";
      mainBlock.style.paddingRight ="0px";
    }
    else{    //POUR LES ECRANS DE TAILLE SUPERIEUR A LA VARIABLE smallScreen = 640px
      menuB.style.minWidth = "0px";
      menuB.style.width = "280px";
      mainBlock.style.width = "100vh";
      mainBlock.style.paddingLeft ="2vh";
      mainBlock.style.paddingRight ="2vh";

      mainBlock.style.margin = "auto";
    }
  }
}




var logoRotate = 0;

function smallSurprise(){

  if (surprise == 1) {
    logoRotate += 180;
    document.getElementById("easter-egg").style.transform = "rotate("+logoRotate+"deg)";
    surprise = 0;
  }
  else {
    logoRotate += 180;
    document.getElementById("easter-egg").style.transform = "rotate("+logoRotate+"deg)";
    surprise = 1;
  }

}
