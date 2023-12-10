window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.querySelector("html").clientWidth < 768) {
    document.getElementById("mainHeader").classList.add("shrink-header");
    document.getElementById("profilePicture").style.width = "100%";
    document.querySelector("#name h1").style.fontSize = "1.5rem";
  } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mainHeader").classList.add("shrink-header");
    document.getElementById("profilePicture").style.width = "50%";
    document.querySelector("#name h1").style.fontSize = "1.5rem";
  } else {
    document.getElementById("mainHeader").classList.remove("shrink-header");
    document.getElementById("profilePicture").style.width = "100%";
    document.querySelector("#name h1").style.fontSize = "2.5rem";
  }
}

let linkItems = document.querySelectorAll(".link-item");
for (let linkItem of linkItems) {
  linkItem.innerText = `[${linkItem.innerText}]`;
}