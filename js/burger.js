// Buger menu    /  Année automatique / / Toggle / Automatised Language Selector

// ------------------------------------- burger :
//  -- ----------- Base
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
// var openBtn = document.getElementsByClassName("burger-icon")
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}


// -- -------------- Sub Menu System
document.addEventListener('DOMContentLoaded', function() {
  const menuList = document.querySelector('.menu-list');

  document.querySelectorAll('.menu-list li').forEach(function(item) {
      item.addEventListener('click', function(e) {
          const subMenu = e.target.nextElementSibling;
          if (subMenu) {
              subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
          }
      });
  });
});
// ------------------------------------- année automatique
const date = new Date();
const year = date.getFullYear();
document.getElementById("activeyear").innerHTML = year;


// -------------------------------------  Toggle
const toggles = document.querySelectorAll('.toggle');
  toggles.forEach((toggle) => {
    const target = document.querySelector(toggle.getAttribute('data-target'));
    toggle.addEventListener('click', () => {
      target.classList.toggle('visible');
    });
  });


// language automatised selector

// Identifie and store selected language

// detect and apply  -> on specific JS to work only on the index
