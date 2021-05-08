navIcon = document.querySelector(".material-icons.nav");
navMenu = document.querySelector("nav ul");
links = document.querySelectorAll("nav ul li");
console.log(navMenu);
click = 0;
navIcon.onclick = function () {
  click += 1;
  if (click % 2 != 0) {
    document.querySelector(".material-icons.nav").innerHTML = "close";
    navMenu.style.display = "flex";
    document.querySelector("*").style.overflow = "hidden";
  } else {
    document.querySelector(".material-icons.nav").innerHTML = "menu";
    navMenu.style.display = "none";
    document.querySelector("*").style.overflow = "auto";
  }
};

links.forEach((item) =>
  item.addEventListener("click", function () {
    document.querySelector(".material-icons.nav").innerHTML = "menu";
    navMenu.style.display = "none";
    document.querySelector("*").style.overflow = "auto";
  })
);

links.forEach(function (item) {
  item.onclick = function () {
    document.querySelector(".material-icons.nav").innerHTML = "menu";
    navMenu.style.display = "none";
    document.querySelector("*").style.overflow = "auto";
  };
});
