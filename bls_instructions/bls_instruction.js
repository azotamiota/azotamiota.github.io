function navbarDisplay() {
    this.document.getElementById("navbar-nav").style.display = "none";
    this.document.getElementById("dropdown").style.display = "flex";
}

if (window.innerWidth < 1024) {
    this.document.getElementById("navbar-nav").style.display = "none";
    this.document.getElementById("dropdown").style.display = "flex";
} else {
    this.document.getElementById("navbar-nav").style.display = "flex";
    this.document.getElementById("dropdown").style.display = "none";
}

// window.addEventListener('resize', function() {
//    if (this.window.innerWidth < 1024) {
//        console.log('window width: ', this.window.innerWidth)
//        this.document.getElementById('navbar-nav').style.display = 'none'
//        this.document.getElementById("dropdown").style.display = "flex";
//    } else {
//        this.document.getElementById('navbar-nav').style.display = 'flex'
//        this.document.getElementById("dropdown").style.display = "none";

//    }
// });
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};