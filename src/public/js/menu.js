document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("btn_open_i").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var btn_open_i = document.getElementById("btn_open_i")
var navbar_menu = document.getElementById("navbar_move")

function open_close_menu(){

    side_menu.classList.toggle("menu__side__move");

}

if(window.innerWidth < 820){
    body.classList.add("body__move"); 
    side_menu.classList.add("menu__side_move");
    navbar_menu.classList.add("navbar__move");
}