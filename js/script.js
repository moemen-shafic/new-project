// navbarfixed

window.onscroll = function(){
    let navbar = document.getElementById("navBar")

    if (window.pageYOffset > 15){
        navbar.style.backgroundColor = "#7E495D";
        navbar.style.height = "80px";
        navbar.style.boxShadow = "0 0 10px 0 black";
    }
    else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none"
        navbar.style.transition="1s"
        navbar.style.height="120px"
    }
}

// ////////////////////////////////////////////

