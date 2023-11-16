function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.border="2px solid #192a56";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidenav").style.border="none";
}


// navbar tìm kiếm
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-header-home").style.top = "0";
    } else {
        document.getElementById("navbar-header-home").style.top = "-115px";
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

