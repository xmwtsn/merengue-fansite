/* Toggle between adding and removing the "responsive" class to hamburger menu when the user clicks on the FA icon */
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "hmenu") {
      x.className += " responsive";
    } else {
      x.className = "hmenu";
    }
  }