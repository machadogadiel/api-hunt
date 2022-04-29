const signInButton = $("#sign-in-button")
const waitListButton = $("#waitlist-button")
const signUpButton = $("#sign-up-button")

const inputName = $("#input-name")
const inputCpf = $("#input-cpf")
const inputCep = $("#input-cep")
const inputCity = $("#input-city")
const inputAddress = $("#input-address")
const inputEmail = $("#input-email")
const inputPassword = $("#input-pw")
const inputPwConfirm = $("#input-pw-confirm")

const userModel = new UserModel()
const userController = new UserController()

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

        userController.createUserFromInput(userModel)
        console.log(userModel.getUsers())
    })

    inputCep.keyup(function() {
        let cepValue = inputCep.val()

        if (cepValue.length == 5) {
            inputCep.val(cepValue + "-")
        }
    })

    inputCpf.keyup(function() {
        let cpfValue = inputCpf.val()

        if (cpfValue.length == 3) {
            inputCpf.val(cpfValue + ".")
        }

        if (cpfValue.length == 7) {
            inputCpf.val(cpfValue + ".")
        }

        if (cpfValue.length == 11) {
            inputCpf.val(cpfValue + "-")
        }
    })
}
