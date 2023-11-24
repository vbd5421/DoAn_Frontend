function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("icon-bar-header-mobile").style.opacity = "0";
    document.getElementById("mySidenav").style.border="2px solid #192a56";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("icon-bar-header-mobile").style.opacity = "1";
    document.getElementById("mySidenav").style.border="none";
}


// navbar tìm kiếm
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-header-home").style.top = "0";
        document.getElementById("nav-home-mobile").style.position= "unset";
    } else {
        document.getElementById("navbar-header-home").style.top = "-115px";
        document.getElementById("nav-home-mobile").style.position= "fixed";
        document.getElementById("nav-home-mobile").style.zIndex="20";
        document.getElementById("nav-home-mobile").style.width="100%"
    }
    prevScrollpos = currentScrollPos;
}

// password show , hide
function password_show_hide() {
    var password = document.getElementById("password");
    var show = document.getElementById("show_eye");
    var hide = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (password.type === "password") {
      password.type = "text";
      show.style.display = "none";
      hide.style.display = "block";
    } else {
      password.type = "password";
      show.style.display = "block";
      hide.style.display = "none";
    }
  }

