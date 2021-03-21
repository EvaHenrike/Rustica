


var toggleStatus = 1;
function toggleMenu() {
    if (toggleStatus == 1) {
        document.querySelector(".mobile_menu").style.right = "-240px";
        menuStatus = 0;

    } else if (toggleStatus == 0) {
        document.querySelector(".mobile_menu").style.right = "0px";
        menuStatus = 1;

    }
}
