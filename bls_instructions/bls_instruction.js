function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn") && !event.target.matches(".fas")) {
    console.log("clicked outside of the button");
    if (
      document
        .getElementsByClassName("dropdown-content")[0]
        .classList.contains("show")
    ) {
      document
        .getElementsByClassName("dropdown-content")[0]
        .classList.remove("show");
    }

    // for (let i = 0; i < dropdowns.length; i++) {
    //   var openDropdown = dropdowns[i];
  }
};