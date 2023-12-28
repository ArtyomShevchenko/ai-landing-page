const howItWorksVideoContainer = document.querySelector("#howItWorksVideoContainer");
const howItWorksVideo = document.querySelector("#howItWorksVideo");
const demoBtn = document.getElementById("demoBtn");
const innerButton = document.querySelector(".how-it-works__demo-button");


function startVideo() {
    if (howItWorksVideo.paused) {
        howItWorksVideo.play()
        demoBtn.classList.add("how-it-works__button--active")
        innerButton.classList.add("how-it-works__demo-button--hidden")
    } else {
        howItWorksVideo.pause()
        demoBtn.classList.remove("how-it-works__button--active")
        innerButton.classList.remove("how-it-works__demo-button--hidden")
    }
}

howItWorksVideoContainer.addEventListener("click", startVideo)
demoBtn.addEventListener("click", startVideo);