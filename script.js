const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const menu = document.getElementById('menu');

menuBtn.onclick = function () {
  if (sideNav.style.top === '-700px') {
    sideNav.style.top = '0';
    menu.src = 'Images/close.png';
  } else {
    sideNav.style.top = '-700px';
    menu.src = 'Images/menu.png';
  }
};