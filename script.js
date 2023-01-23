function menuFunction() {
    var x = document.getElementById("mobileMenu");
    if (x.className === "mobileDown") {
        x.className += " responsive";
    } else {
        x.className = "mobileDown";
    }
}