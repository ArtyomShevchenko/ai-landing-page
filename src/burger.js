const burgerIcon = document.getElementById("burgerIcon");
const menuList = document.getElementById("menuList");
const menuCloseBtn = document.getElementById("menuCloseBtn");

burgerIcon.addEventListener("click", () => {
    menuList.classList.toggle("--menu-visible");
    document.body.style.overflow = "hidden"
})

menuCloseBtn.addEventListener("click", () => {
    menuList.classList.toggle("--menu-visible")
    document.body.style.overflow = "visible"
})