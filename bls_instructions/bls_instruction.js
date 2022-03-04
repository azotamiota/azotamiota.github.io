function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show")
}

window.addEventListener('click', function (event) {
  if (!event.target.matches(".dropbtn") && !event.target.matches(".fas")) {
    if (
      document
        .getElementsByClassName("dropdown-content")[0]
        .classList.contains("show")
    ) {
      document
        .getElementsByClassName("dropdown-content")[0]
        .classList.remove("show");
    }
  }
});