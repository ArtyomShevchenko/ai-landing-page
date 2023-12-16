const demoBtn = document.getElementById("demoBtn")
const demoContainer = document.getElementById("demoContainer")
const demoImage = document.getElementById("demoImage")

demoContainer.addEventListener("click", () => {
    if (String(demoImage.src).includes(".png")) {
        demoImage.src = String(demoImage.src.replace(".png", ".gif"))
        demoBtn.classList.add("how-it-works__button--active")
    } else {
        demoImage.src = String(demoImage.src.replace(".gif", ".png"))
        demoBtn.classList.remove("how-it-works__button--active")
    }
});

demoBtn.addEventListener("click", () => {
    if (String(demoImage.src).includes(".png")) {
        demoImage.src = String(demoImage.src.replace(".png", ".gif"))
        demoBtn.classList.add("how-it-works__button--active")
    } else {
        demoImage.src = String(demoImage.src.replace(".gif", ".png"))
        demoBtn.classList.remove("how-it-works__button--active")
    }
});