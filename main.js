const menu = document.querySelector("#header__menu");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

menu.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "none";
});