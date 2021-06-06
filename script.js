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
