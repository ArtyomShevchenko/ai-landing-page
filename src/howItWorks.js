const demoBtn = document.getElementById("demoBtn")
const demoContainer = document.getElementById("demoContainer")
const img = demoContainer.querySelector(".how-it-works__demo-img")
const animation = demoContainer.querySelector(".how-it-works__demo-animation")

img.style.display = "block"
animation.style.display = "none"

demoContainer.addEventListener("click", (e) => {
    if (img.style.display === "block") {
        img.style.display = "none";
        animation.style.display = "block";
        demoBtn.classList.add("how-it-works__button--active")
        e.target.querySelector(".how-it-works__demo-button").style.display = "none"
    } else {
        img.style.display = "block";
        animation.style.display = "none";
        demoBtn.classList.remove("how-it-works__button--active")
        e.target.querySelector(".how-it-works__demo-button").style.display = "block"
    }
});

demoBtn.addEventListener("click", () => {
    if (img.style.display === "block") {
        img.style.display = "none";
        animation.style.display = "block";
        demoBtn.classList.add("how-it-works__button--active")
        demoContainer.querySelector(".how-it-works__demo-button").style.display = "none"
    } else {
        img.style.display = "block";
        animation.style.display = "none";
        demoBtn.classList.remove("how-it-works__button--active")
        demoContainer.querySelector(".how-it-works__demo-button").style.display = "block"
    }
});