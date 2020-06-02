
menu.onclick = function funMenu(){
    var x = document.getElementById("myTopnav");

    if(x.className === "top_nav"){
        x.className += " responsive";
    } else{
        x.className = "top_nav"
    }
}