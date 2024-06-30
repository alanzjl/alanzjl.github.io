
const charZhao = document.querySelector("#char-zhao");
const charJia = document.querySelector("#char-jia");
const charLiang = document.querySelector("#char-liang");
const detailsZhao = document.querySelector("#details-zhao");
const detailsJia = document.querySelector("#details-jia");
const detailsLiang = document.querySelector("#details-liang");

charZhao.addEventListener("mouseover", () => {
    detailsZhao.classList.remove("hide");
});
charZhao.addEventListener("mouseout", () => {
    detailsZhao.classList.add("hide");
});

charJia.addEventListener("mouseover", () => {
    detailsJia.classList.remove("hide");
});
charJia.addEventListener("mouseout", () => {
    detailsJia.classList.add("hide");
});

charLiang.addEventListener("mouseover", () => {
    detailsLiang.classList.remove("hide");
});
charLiang.addEventListener("mouseout", () => {
    detailsLiang.classList.add("hide");
});