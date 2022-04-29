const signInButton = $("#sign-in-button")
const waitListButton = $("#waitlist-button")
const signUpButton = $("#sign-up-button")

initListeners()

function initListeners() {
    signInButton.click(function() {
        location.href = "../html/sign-in.html"
    })
    
    waitListButton.click(function() {
        location.href = "../html/sign-up.html"
    })

    signUpButton.click(function(event) {
        event.preventDefault()
    })
}