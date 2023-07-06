const navHamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-links");
const overlay = document.querySelector(".overlay");
const navLinks = document.getElementsByClassName("nav-link");
const linkArr = Array.from(navLinks);

navHamburger.addEventListener("mouseup", expandNavList);

linkArr.forEach(link => {
    link.addEventListener("mouseup", closeNavList);
})


function closeNavList(e) {
    if(navHamburger.classList.contains("active")) {
        expandNavList(e);
    }
}

function expandNavList(e) {
  toggleMenuIcon();
  toggleScroll();
  toggleElements();
}

function toggleMenuIcon() {
  !navHamburger.classList.contains("active")
    ? (navHamburger.style.backgroundImage = "url(assets/images/icon-menu-close.svg)")
    : (navHamburger.style.backgroundImage = "url(assets/images/icon-menu.svg");
}

function toggleScroll() {
  !navHamburger.classList.contains("active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
}

function toggleElements() {
  navHamburger.classList.toggle("active");
  navList.classList.toggle("active");
  overlay.classList.toggle("active");
}


