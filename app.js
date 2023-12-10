window.onscroll = function() {scrollFunction()};
var scolled = false;
var lastScrollTop = 0;

function scrollFunction() {
  lastScrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset);
  console.log(lastScrollTop);
  if (Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset, lastScrollTop) > 70) {
    scolled = true;
  } else if (Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset, lastScrollTop) == 0){
    scolled = false;
  }
  console.log(scolled, lastScrollTop);
  if (document.querySelector("html").clientWidth < 768) {
    document.getElementById("mainHeader").classList.add("shrink-header");
    document.getElementById("profilePicture").classList.remove("shrink-picture");
    document.querySelector("#name h1").style.fontSize = "1.5rem";
  } else if (scolled) {
    document.getElementById("mainHeader").classList.add("shrink-header");
    document.getElementById("profilePicture").classList.add("shrink-picture");
    document.querySelector("#name h1").style.fontSize = "1.5rem";
  } else {
    document.getElementById("mainHeader").classList.remove("shrink-header");
    document.getElementById("profilePicture").classList.remove("shrink-picture");
    document.querySelector("#name h1").style.fontSize = "2.5rem";
  }
}

let linkItems = document.querySelectorAll(".link-item");
for (let linkItem of linkItems) {
  linkItem.innerText = `[${linkItem.innerText}]`;
}