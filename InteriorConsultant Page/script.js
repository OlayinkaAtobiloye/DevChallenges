var NavIcon = document.getElementById('NavIcon');
var NavBar = document.getElementById('NavBar')

console.log(NavIcon)
NavIcon.addEventListener('click', function(){NavBar.setAttribute('class', 'NavBar2') 
document.getElementsByTagName('body')[0].style.overflow = 'hidden'})