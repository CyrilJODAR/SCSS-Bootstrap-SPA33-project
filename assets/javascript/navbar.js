function myFunction() {
    var x = document.getElementById("navSPA");
    if (x.className === "navSPA") {
      x.className += " navStyleResponsive";
    } else {
      x.className = "navSPA";
    }
  }