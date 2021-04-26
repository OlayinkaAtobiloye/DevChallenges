var NavIcon = document.getElementById("NavIcon");
var NavBar = document.getElementById("NavBar");
var Header = document.getElementsByTagName('header')[0];

count = 0;
NavIcon.addEventListener("click", function () {
  count += 1;
  if (count % 2 == 0) {
    NavBar.setAttribute("class", "NavBar");
    NavIcon.setAttribute("class", "NavIcon");

    document.getElementsByTagName("body")[0].setAttribute("class", "");
  } else {
    NavBar.setAttribute("class", "NavBar2");
    NavIcon.setAttribute("class", "NavIcon2");
    document.getElementsByTagName("body")[0].setAttribute("class", "close");
  }
  
});
