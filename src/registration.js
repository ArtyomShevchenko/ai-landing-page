const registrationFormResponse = document.querySelector(".registration__form-response")
const registrationForm = document.getElementById("registrationForm")
const requstrationSubmitButton = registrationForm.querySelector("button[type='submit")

let name,
    surname,
    phone,
    email

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    requstrationSubmitButton.classList.add("--button-active")

    const SERVICE_ID = "service_lsz3a55",
        TEMPLATE_ID = "template_o6ntpge",
        PUBLIC_KEY = "bqsQKTfwvEeaDOIsZ"

    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, registrationForm, PUBLIC_KEY)
    //     .then((res) => {
    //         if (res.text === "OK") {
    //             registrationFormResponse.classList.add("registration__form-response--visible");
    //             registrationForm.classList.add("registration__form--hidden")
    //         }
    //         console.log("Message send succsesful")

    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
})

function validationForm() {
    for (el of registrationForm) {
        if (el.name === "name") name = el
        if (el.name === "email") email = el
        if (el.name === "message") message = el
    }

    // if (name.value && email.value && message.value) {
    if (name.value && email.value) {
        registrationForm.querySelector("button[type = 'submit']").disabled = false
    }
}

for (const el of registrationForm) {
    if (el.name) {
        el.addEventListener("input", (e) => {
            console.log(el)
            validationForm()
        })
    }
}
