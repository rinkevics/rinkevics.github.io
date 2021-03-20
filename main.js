
function toggleMenu() {
    var menu = document.getElementById("ds_menu_mobile");
    menu.classList.toggle("ds_hidden");    
    var menuButton = document.getElementById("ds_menu_button");
    if(menuButton.value == "=") {
        menuButton.value = "x";
    } else {
        menuButton.value = "=";
    }
}

document.addEventListener('scroll', function(e) {
    var menu = document.getElementById("ds_menu_mobile");
    menu.classList.add("ds_hidden");
});