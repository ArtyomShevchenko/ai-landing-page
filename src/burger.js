const burgerIcon = document.getElementById("burgerIcon");
const menuList = document.getElementById("menuList");
const menuCloseBtn = document.getElementById("menuCloseBtn");

burgerIcon.addEventListener("click", () => {
    menuList.classList.toggle("--menu-visible");
    document.body.style.overflow = "hidden"
})

document.querySelectorAll(".menu__link").forEach(link => {
    link.addEventListener("click", () => {
        menuList.classList.toggle("--menu-visible")
        document.body.style.overflow = "visible"
    })
})