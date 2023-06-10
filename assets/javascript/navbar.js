function myFunction() {
    var x = document.getElementById("navSPA");
    if (x.className === "navSPA") {
      x.classList.add("navStyleResponsive");
    } else {
      x.classList.remove("navStyleResponsive");
    }
  }