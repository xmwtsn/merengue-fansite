/* Simple JS calculation counting clicks */
var i = 0;
function buttonClick() {
    i++;
    document.getElementById('cake').value = i;
}

/* Email Generator for Fanmail Section */
function sendMail() {
    var link = "mailto:dearmerengue@gmail.com"
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}

/* Toggle between adding and removing the "responsive" class to hamburger menu when the user clicks on the FA icon */
function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "hmenu") {
      x.className += " responsive";
    } else {
      x.className = "hmenu";
    }
  }