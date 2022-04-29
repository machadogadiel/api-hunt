
class UserController {    
    setAddressFromCep(cep) {
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            success: function(response) {
                $("#input-state").val(response.uf)
                $("#input-city").val(response.localidade)
                $("#input-address").val(response.logradouro)
            }
        })
    }
    
    createUserFromInput(userModel) { 
        const inputName = $("#input-name")
        const inputCpf = $("#input-cpf")
        const inputCep = $("#input-cep")
        const inputCity = $("#input-city")
        const inputAddress = $("#input-address")
        const inputEmail = $("#input-email")
        const inputPassword = $("#input-pw")
        const inputPwConfirm = $("#input-pw-confirm")

        const isValidData = this.isValidCpf(inputCpf.val()) 
        && this.isValidCep(inputCep.val()) 
        && this.isValidEmail(inputEmail.val()) 
        && this.isValidCep(inputCep.val()) 
        && this.isValidPassword(inputPassword.val(), inputPwConfirm.val())
        

        if (isValidData) {
            userModel.createUser(inputName, inputCpf, inputEmail, inputPassword, inputCep, inputAddress)
        }
    }

    isValidEmail(str) {
        return str.indexOf("@") > 0 && str.indexOf(".") > 0 ? true : false
    }

    isValidCpf(str) {
        return str.length <= 14 ? true : false
    }

    isValidCep(str) {
        return str.length <= 9 && str.indexOf("-") > 0 ? true : false
    }

    isValidPassword(str, str1) {
        return str == str1 ? true : false
    }
}