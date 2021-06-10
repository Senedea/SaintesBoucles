var deroulant=document.getElementById("deroulant")

deroulant.addEventListener("click",function(){
 var sousmenu=document.querySelector("#sousmenu")
 if(sousmenu.classList.contains("toggle")){
    deroulant.innerHTML="Boucles ▲-"
}
else{
    deroulant.innerHTML="Boucles ▼-"
}
     sousmenu.classList.toggle("toggle")

})



// Bingo 
function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var tablo=[
    "La Mano a le biz d'armes",
    "Ice-T & les pansements nounours",
    "Ice-T le forceur",
    "Ice-T parle de mariage",    
    "Lenny : Blague validée",
    "Lenny : AH!",
    "champ spotted?",
    "Miguel fait du gringe",
    "Miguel oubli de faire qque chose au bout de 5min",
    "Milo : voiture cassée",
    "Pablo coup de pression",
    "Pablo dit merci (cartel exlu)",
    "Personnage X serait une plus-value pour la Mano",
    "Visite de courtoisie tierquar Mano",
    "Lenny : bras droit ?",
    "La Mano croise les Lost sur leur champs",
    "C'est la merde chez les Lost",
    "Un Lost se fracasse en moto",
    "Blague sur Smoke",
    "Blague sur Charlie",
    "LittleSeoul en mode YOLO",
    "Personne comprend ce que LS disent",
    "Parnas & les potins",
    "Largo gouverneur",
    "Nico : petit clodo partit trop tôt",
    "Layna est passée sous le bureau",
    "Benny's : oubli d'une custom",
    "Paragon R : sujet de jalousie", 
    "Dodo : plan de merde",
    "Dodo : enfaite c'est bien",
    "Kuruma pour LS",
    "Faut virer les streiter",
    "Craquage non prévu pour un new véhicule",
    "Ah wéééé / c'est carré",
    "Un Ballas fait de la merde",
    "SVP ON S'ARRÊTE",
    "Descente SWAT/GIBS",
    "Leah au LSPD",
    "Abbing veut tomber sur la Mano",
    "Un problème ? c'est la Mano",
    "Pripri trop fort",
    "C pas disnay",
    "Yé té tou!",
    "PPA, le retour",
    "Bisous!",
    "9 3/4",
    "La MethMut, elle assure",
    "Plus c'est gros, plus ça passe",
    "Plan foireux : raté",
    "Plan foireux : réussite",
    "Tortues au champs",
    "Où est Charlie ?",
    "Où sont les fusils à pompe?",
    "Démineur au champ ou à la transfo",
    "Random HRP chez la Mano",
    "Réf à la Boucle en RP",
    "ClaymD parle d'animaux",
    "Cé ça le sérious RP ?",
    "une MAJ ? crimi 2.0 !",
    "Doc Lobby vol de la drogue",
    "Le chat : Haylie a quitter le serv ?",
    "Le chat : Où sont Julian & Noah ?",
    "Prédiction de Clipper se réalise",
]

var tablotemp=tablo
var table=document.querySelectorAll("#bingo > table tr")
table.forEach(element => {
   element.querySelectorAll("*").forEach(e=>{
       random=entierAleatoire(0, tablotemp.length-1)
    e.innerHTML=tablotemp[random]
    tablotemp.splice(random, 1)
   })
});


var tds=document.querySelectorAll("#bingo > table tr td")

for(i=0;i<tds.length;i++){
    tds[i].addEventListener("click", clik =>{
        clik.target.classList.toggle("active")
    })
}

