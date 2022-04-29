const signInButton = $("#sign-in-button")
const waitListButton = $("#waitlist-button")
const signUpButton = $("#sign-up-button")

initListeners()

function initListeners() {
    signInButton.click(function() {
        location.href = "../../assets/html/sign-in.html"
    })
    
    waitListButton.click(function() {
        location.href = "../../assets/html/sign-up.html"
    })

    signUpButton.click(function(event) {
        event.preventDefault()
    })
}